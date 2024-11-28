import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../video';

@Injectable({
  providedIn: 'root'
})

export class VideoServiceService {
  private apiURL = "http://localhost:3000/videos";
  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiURL);
  }

  getVideoWatch(video: Video): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.apiURL}/${video.id}`);
  }
}
