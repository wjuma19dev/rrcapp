import { RncService } from './../../rncs/rnc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(public rncService: RncService) { }

  ngOnInit() {}

}
