import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  borderStyle = '1px solid black';

  alertStyle = {
    color: 'red',
    fontWeight: 'bold',
    borderBottom: this.borderStyle
  };

  style: any;

  ngOnInit(): void {
    this.setStyle(this.alertStyle);
  }

  setStyle(style: any) {
    this.style = style;
  }
}
