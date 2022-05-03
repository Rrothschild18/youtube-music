import { Component, OnChanges, Input, SimpleChanges, ViewChild, HostListener, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subject } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnChanges, OnInit {
  @Input() activeInput: any
  @ViewChild ('searchInput') input: ElementRef | undefined
  @Output() toggleActiveInput = new EventEmitter<string>();
  values: string = ''
  results$: Observable<any> | undefined 
  subject = new Subject()
  httpClient: any;


  constructor(
    private dashboard: DashboardService
  ) { }


  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.activeInput = changes['activeInput'].currentValue

    this.subject.pipe(
      debounceTime(1000),
    ).subscribe({
      next: (v) => this.dashboard.fetchSearch(v).subscribe(result => {
        this.results$ = result
        console.log('results', this.results$)
      })
    })
  }

  @HostListener("document:click", ['$event.target'])
  clicked(target: any) {
    //refactor
    if(this.hasElement(target) && this.isElementInput(target)){
      if(!this.activeInput) this.toggleActiveInput.emit()
    } else {
      if(!this.activeInput) return this.toggleActiveInput.emit()
      if(this.activeInput) return this.toggleActiveInput.emit()
    }
  }

  hasElement(elementTarget: any): boolean {
    return !!elementTarget.closest('.search-input')
  }

  isElementInput(target: any){
    return target.closest('.search-input') === this.input?.nativeElement
  }

  search(event: KeyboardEvent) {
    this.values = (event.target as HTMLInputElement).value
    this.subject.next(this.values)
  }
}
