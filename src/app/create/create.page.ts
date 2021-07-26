import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EActividad, EEstado, ERegimen } from '../rncs/rnc.enum';
import { RncService } from '../rncs/rnc.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rncService: RncService
  ) { }

  ngOnInit() {

    this.createForm = this.fb.group({
      cedulaORnc: ['', Validators.required],
      nombreRazonSocial: ['', Validators.required],
      nombreComercial: ['', Validators.required]
    });

  }

  onCreateRnc(): void {
    const { cedulaORnc, nombreRazonSocial, nombreComercial } = this.createForm.value;

    const nuevoRnc = {
      cedulaORnc, 
      nombreRazonSocial, 
      nombreComercial,
      regimenDePago: ERegimen.NORMAL,
      estado: EEstado.ACTIVO,
      actividadEconomica: EActividad.BANCOSMULTIPLES
    }

    // console.log(nuevoRnc);
    this.rncService.create(nuevoRnc);
  }

}
