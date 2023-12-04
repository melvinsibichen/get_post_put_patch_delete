import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;
  response: any;

  constructor(private fb: FormBuilder, private httpService: HttpService) {
    this.form = this.fb.group({
    
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const userData = this.form.value;
      this.httpService.postDetails(userData).subscribe(
        (res) => {
          this.response = res;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
