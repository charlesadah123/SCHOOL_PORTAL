import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false; //initialized as false

  ngOnInit(): void {
  }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus; // for every click you will have it as true
    this.SideNavToggled.emit(this.menuStatus);
  }

}
