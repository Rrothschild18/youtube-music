import { Component,  Input, ViewChild, HostListener, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInputComponent implements  OnInit {
  @Input() activeInput: any
  @ViewChild ('searchInput') input: ElementRef | undefined
  @Output() toggleActiveInput = new EventEmitter<string>();

  private subject = new Subject<string>()

  constructor(private dashboard: DashboardService) { }

  ngOnInit(): void {
    this.subject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((query: string) => this.dashboard.fetchSearch(query))
    ).subscribe((data)=> {
      this.dashboard.broadcastSearchResults.next(data)
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

  search(query: string) {
    this.subject.next(query)
  }
}
