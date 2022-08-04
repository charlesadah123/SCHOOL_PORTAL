import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 // @Output() SideNavToggled = new EventEmitter<boolean>()
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
//    this.SideNavToggled.emit(this.menuStatus);
  }

}
