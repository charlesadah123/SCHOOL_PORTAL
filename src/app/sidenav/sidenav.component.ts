import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
@Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: "Dashboard",
      icon: 'bx bx-grid-alt'
    },
    {
      number: '2',
      name: "Posts",
      icon: 'bx bx-book-alt'
    },
    {
      number: '3',
      name: "Chart",
      icon: 'bx bx-line-chart'
    },
    {
      number: '4',
      name: "Subjects",
      icon: 'bx bxs-chevron-down arrow'
    },
    {
      number: '5',
      name: "Dashboard",
      icon: 'bx bx-grid-alt'
    },
    {
      number: '6',
      name: "Time-table",
      icon: 'bx bx-compass'
    },
    {
      number: '7',
      name: "Bio-data",
      icon: 'bx bx-history'
    },
    {
      number: '8',
      name: "Setting",
      icon: 'bx bx-cog'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
