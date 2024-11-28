import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../../services/video-service.service';
import { CommonModule } from '@angular/common';
import { Video } from '../../../video';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})

export class VideoComponent implements OnInit {

  videos: Video[] = [];

  constructor(private videoService: VideoServiceService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((dado) => {
      this.videos = dado;
      console.log(dado);
    })
  }

  watchVideo(video: Video) {
    this.videoService.getVideoWatch(video).subscribe(() =>
      (this.videos = this.videos.filter((v) => v.id != video.id)));
  }

}
