import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  apiUrl = 'http://localhost/vectraAngular/albums';
  constructor(private http: HttpClient) { }
  getAlbums() {
    return this.http.get(this.apiUrl + '/start');
  }
}
