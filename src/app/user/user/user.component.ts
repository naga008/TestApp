import { Component, OnInit } from '@angular/core';
declare  var $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.body1').removeClass('body');
  }

}
