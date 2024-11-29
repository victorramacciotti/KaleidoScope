import { Component } from '@angular/core';
import { VideoItemComponent } from "../../components/video-item/video-item.component";
import { Video } from '../../../video';
import { VideoServiceService } from '../../services/video-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [VideoItemComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
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
