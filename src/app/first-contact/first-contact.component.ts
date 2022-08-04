import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-contact',
  templateUrl: './first-contact.component.html',
  styleUrls: ['./first-contact.component.css']
})
export class FirstContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideNavStatus: boolean = false;
  
}

