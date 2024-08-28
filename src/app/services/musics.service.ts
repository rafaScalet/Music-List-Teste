import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from '../models/music';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  constructor(private http: HttpClient) {}

  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(`${environment.url}/music`);
  }

  getMusic(id: number): Observable<Music> {
    return this.http.get<Music>(`${environment.url}/music/${id}`);
  }
}
