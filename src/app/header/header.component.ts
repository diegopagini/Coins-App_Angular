import { Component, OnInit } from '@angular/core';
import { format, } from 'date-fns'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    format(new Date(), "'Today is a' iiii")
  }

}
