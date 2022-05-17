import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeInput: boolean = false
  @ViewChild ('searchInput') input: ElementRef | undefined
  @Output() toggleActiveInput = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {

  }

  onToggleInput(value: any){
    console.log(value)

    if(this.activeInput && !value) return this.activeInput = false
   
    return
  }

  handleClick(event: any) {
    this.activeInput = true
  }




  @HostListener("document:click", ['$event.target'])
  
  clicked(target: any) {

    if(!this.activeInput) {
      return console.log('falso')
    }


    if(target.isEqualNode(document.querySelector('#input'))) {
      return this.activeInput = true
    } 

    if (target.isEqualNode(document.querySelector('#searchLabel'))) {
      return
    } 

   this.activeInput = false
  }


  hasInput(){
    return !!document.querySelector('.search-input')
  }

  isElementInput(target: any){
    return target.closest('.search-input') === this.input?.nativeElement
  }
}
