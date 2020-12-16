import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formulario: FormGroup;
  // public isSubmited = false;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    console.log('Submetido');
    // this.isSubmited = true;
    if (this.formulario.valid) {
      // this.isSubmited = false;
      console.log('Preencha todos os campos obrigatórios');
      console.log(this.formulario.value);
    }
  }

}
