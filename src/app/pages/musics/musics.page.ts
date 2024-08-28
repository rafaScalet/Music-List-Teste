import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicsService } from 'src/app/services/musics.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit{

  musics: Music[] = [];

  constructor(private service: MusicsService) { }

  ngOnInit(): void {
    this.load();
  }

  load () {
    this.service.getMusics().subscribe({
      next: data => this.musics = data
    });
  }

}
