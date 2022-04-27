import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeInput: boolean = false

  constructor() {}

  ngOnInit(): void {

  }

  onToggleInput(){
    this.activeInput = !this.activeInput
  }
}
