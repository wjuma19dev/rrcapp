import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html'
})
export class ButtonCreateComponent implements OnInit {

  constructor(private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {}

  onClick() {
   this.router.navigate(['create'], { relativeTo: this._route });
  }

}
