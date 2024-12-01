import { Component, Output, EventEmitter } from '@angular/core';
import { VideoServiceService } from '../../services/video-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchText: string = '';
  @Output() searchChange = new EventEmitter<string>();
  constructor(private videoService: VideoServiceService) { }

  onSearch(): void {
    this.videoService.setSearchText(this.searchText);
  }

}
