import { Component, Input } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player'
import { Video } from '../../../video';
import { VideoServiceService } from '../../services/video-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [YouTubePlayerModule, CommonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {


  constructor(private videoService: VideoServiceService) { }


  //video: Video[] = [];
  video: any = [];
  @Input() videoId?: string;
  videoIdText: string = '';

  ngOnInit(){
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);

    this.videoService.videoId$.subscribe(text => {
      this.videoIdText = text; 
      console.log('VideoId atualizado:', this.videoIdText);
      this.videoId = this.videoIdText; 
      if (this.videoId) {
        this.loadVideoDetails(this.videoId);
      }
    });

    
  }

  loadVideoDetails(videoId: string): void {
    this.videoService.getVideoWatch(videoId).subscribe((videoData) => {
      this.video = videoData;  
      console.log(this.video);  
    });
  }

  

}
