import { IRnc } from './../rncs/rnc.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FavoriteService {

    private _favorites: IRnc[] = [];
    public favoritesUpdated = new Subject<IRnc[]>();

    constructor() { }
    
    get favorites() {
        return [...this._favorites];
    }

    addFavorite(rnc: IRnc) {
        this._favorites.push(rnc);
        this.favoritesUpdated.next([...this._favorites]);
    }
}