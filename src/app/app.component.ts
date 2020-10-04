import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('tdForm', { static: false })
  tdForm: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.tdForm.value);
  }

}
