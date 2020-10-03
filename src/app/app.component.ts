import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab = 0;

  setTab(num: number): void {
    this.tab = num;
  }

  isSelected(num: number): boolean {
    return this.tab === num;
  }
}
