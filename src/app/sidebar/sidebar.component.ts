import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      icon: "bx bx-grid-alt",
      name: "Dashboard"
    },
    {
      icon: "bx bx-collection",
      name: "Category"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    },
    {
      icon: "bx bx-grid-alt",
      name: "dashboard"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
