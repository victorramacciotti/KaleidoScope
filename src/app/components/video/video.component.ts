import { Component, OnInit } from '@angular/core';
import { Video } from '../../../video';
import { VideoItemComponent } from '../video-item/video-item.component';
import { VideoServiceService } from '../../services/video-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [VideoItemComponent, CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit {

  videos = vid

  constructor(private videoService: VideoServiceService){}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((dado) => {
      this.videos = dado;
      console.log(dado);
    })
  }

}
