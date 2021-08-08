import { Component } from '@angular/core';

@Component({
    selector: 'app-menu-options',
    template: `
        <ion-content>
            <ion-grid fixed>
                <ion-row>
                    <ion-col size="12">
                        <ion-list mode="ios">
                            <ion-item>
                                <ion-icon slot="start" name="list-outline"></ion-icon>
                                <ion-label>Lista</ion-label>
                            </ion-item> 
                            <ion-item>
                                <ion-icon slot="start" name="grid-outline"></ion-icon>
                                <ion-label>Cuadricula</ion-label>
                            </ion-item> 
                        </ion-list>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    `
})

export class MenuOptionsComponent {}