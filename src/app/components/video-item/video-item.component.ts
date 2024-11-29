import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../../video';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})
export class VideoItemComponent {
  @Input() video!: Video;
  @Output() onWatchVideo = new EventEmitter<Video>();

  onWatch(video: Video) {
    this.onWatchVideo.emit(video);
  }

}
