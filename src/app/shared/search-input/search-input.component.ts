import { Component, OnChanges, Input, SimpleChanges, ViewChild, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnChanges {
  @Input() activeInput: any
  @ViewChild ('searchInput') input: ElementRef | undefined
  @Output() toggleActiveInput = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.activeInput = changes['activeInput'].currentValue
  }

  handleInput(event: any){
    console.log(event)
    console.log('Children has reacted')
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
}
