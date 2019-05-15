import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../albums.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
Albums;
  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.Albums = this.albumsService.getAlbums();
    console.log(this.albumsService.getAlbums())
  }

}
