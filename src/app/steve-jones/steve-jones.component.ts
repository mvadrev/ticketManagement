import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-steve-jones',
  templateUrl: './steve-jones.component.html',
  styleUrls: ['./steve-jones.component.css']
})
export class SteveJonesComponent implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit(): void {
  }

  data = [{
    uname: 'Mukund',
    vertical: 'ABC',
    amount: 123,
    procdt: '12/10/2014',
    reason: 'Did not',
    Requester: 'Harry'
  },
  {
    uname: 'Mukund2',
    vertical: 'AAA',
    amount: 133,
    procdt: '12/10/2014',
    reason: 'Did not',
    Requester: 'Joe'
  },
  {
    uname: 'Mukund3',
    vertical: 'AAA',
    amount: 133,
    procdt: '12/10/2014',
    reason: 'Did not',
    Requester: 'Joe'
  }
  
  ]

  goBack() {
    this.route.navigate(['/'])
  }

}
