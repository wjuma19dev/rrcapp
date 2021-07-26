import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.createForm = this.fb.group({
      cedulaORnc: ['', Validators.required],
      nombreRazonSocial: ['', Validators.required],
      nombreComercial: ['', Validators.required]
    });

  }

  onCreateRnc(): void {
    console.log(this.createForm);
  }

}
