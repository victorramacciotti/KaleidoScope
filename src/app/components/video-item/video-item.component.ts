import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../../video';
import { MatCardModule } from '@angular/material/card';
import { VideoServiceService } from '../../services/video-service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, RouterLink],
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})
export class VideoItemComponent {
  @Input() video!: Video;
  @Output() onWatchVideo = new EventEmitter<Video>();
  videoIdText: string = '';


  constructor(private videoService: VideoServiceService) {}
 

  goWatch(videoIdText:string){
    console.log('Video ID clicado:', videoIdText); 
    this.videoService.setVideoId(videoIdText);
  }

}
