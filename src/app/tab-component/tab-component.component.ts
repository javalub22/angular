import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {

  @Input()
  active: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
