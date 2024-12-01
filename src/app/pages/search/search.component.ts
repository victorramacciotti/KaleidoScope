import { Component } from '@angular/core';
import { Video } from '../../../video';
import { VideoServiceService } from '../../services/video-service.service';
import { CommonModule } from '@angular/common';
import { VideoItemComponent } from '../../components/video-item/video-item.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, VideoItemComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private videoService: VideoServiceService) { }

  searchText: string = '';
  videos: Video[] = [];
  filteredVideos: Video[] = [];

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((dado) => {
      this.videos = dado;
      console.log(dado);
    })

    this.videoService.searchText$.subscribe(text => {
      this.searchText = text; 
      console.log('Texto de pesquisa atualizado:', this.searchText);
      this.filterVideos(); 
    });
  }

  filterVideos(): void {
    console.log('Texto de pesquisa no filtro:', this.searchText);
    this.filteredVideos = this.videos.filter(video =>
      video.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
    console.log('Vídeos filtrados:', this.filteredVideos); 
  }

}
