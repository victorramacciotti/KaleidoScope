import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
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

  getVideoWatch(videoId: string): Observable<Video[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map((data: any) => { console.log('Resposta do JSON:', data);
        return data.find((video: Video) => video.videoId === videoId);
      })
    );
  }

  private searchTextSource = new BehaviorSubject<string>(''); 
  searchText$ = this.searchTextSource.asObservable(); 

  setSearchText(text: string): void {
    this.searchTextSource.next(text); 
  }

  private videoIdSource = new BehaviorSubject<string>(''); 
  videoId$ = this.videoIdSource.asObservable(); 

  setVideoId(text: string): void {
    console.log('Video ID recebido no serviço:', text);
    this.videoIdSource.next(text); 
  }
}
