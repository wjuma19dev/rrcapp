import { FavoriteService } from './favorite.service';
import { IRnc } from './../rncs/rnc.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  public favorites: IRnc[];

  constructor(private _favoriteService: FavoriteService) { }

  ngOnInit() {
    this.favorites = this._favoriteService.favorites;
    this._favoriteService.favoritesUpdated.subscribe(favorites => {
      this.favorites = favorites;
    });
  }

}
