import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PractiseReactiveForm';
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Dadabhau'),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid', form.valid);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
