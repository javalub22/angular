import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDark = false;

  ngOnInit(): void {
  }

  changeStyle(): void {
    this.isDark = !this.isDark;
  }
}
