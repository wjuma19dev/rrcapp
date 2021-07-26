import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html'
})
export class ButtonCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onClick() {
   this.router.navigate(['create']);
  }

}
