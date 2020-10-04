import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      id: new FormControl(),
      userId: new FormControl(),
      title: new FormControl(),
      body: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  loadValues() {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(
        (data: { id: number, userId: number, title: string, body: string }) => {
          this.signupForm.controls.id.patchValue(data.id);
          this.signupForm.controls.userId.patchValue(data.userId);
          this.signupForm.controls.title.patchValue(data.title);
          this.signupForm.controls.body.patchValue(data.body);
        }
      );
  }
}
