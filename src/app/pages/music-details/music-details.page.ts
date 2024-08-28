import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MusicsService } from 'src/app/services/musics.service';
import { Music } from 'src/app/models/music';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.page.html',
  styleUrls: ['./music-details.page.scss'],
})
export class MusicDetailsPage implements OnInit {

  music: Music = {} as Music;

  constructor(private service: MusicsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    if (id) {
      this.service.getMusic(id).subscribe({
        next: data => this.music = data
      })
    }
  }

}
