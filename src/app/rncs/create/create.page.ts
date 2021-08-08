import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { EActividad, EEstado, ERegimen } from '../rnc.enum';
import { RncService } from '../rnc.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html'
})
export class CreatePage implements OnInit {

  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rncService: RncService,
    private router: Router,
    private toastController: ToastController,
    private modalControlller: ModalController
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      cedulaORnc: ['', [Validators.required]],
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
    this.rncService.create(nuevoRnc);

    // Lanzar Toast
    this.toastController.create({
      message: 'Rnc creado exitosamente!',
      duration: 5000,
      buttons: [
        {
          text: 'Ver',
          handler: async () => {
            // Ver rnc creado en el modal
            // const modal = await this.modalControlller.create({
            //   component: DetailComponent,
            //   componentProps: { nuevoRnc }
            // });
            // await modal.present()
            console.log(nuevoRnc)

          }
        },
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Handle OK!');
          }
        }
      ]
    })
      .then(toast => {
        this.router.navigate(['../']);
        setTimeout( () => toast.present(), 300 );
      })


  }

}
