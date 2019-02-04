import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../albums.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsService.getAlbums()
    .subscribe(Albums => {
      console.log(Albums);
    });
  }

}
