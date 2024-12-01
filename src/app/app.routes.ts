import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlayComponent } from './pages/play/play.component';
import { SearchComponent } from './pages/search/search.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'homePage', component: HomePageComponent },
    { path: 'myPlaylists', component: PlaylistsComponent, canActivate: [authGuardFn]},
    { path: 'watch', component: PlayComponent},
    { path: 'search', component: SearchComponent},
    { path: '**', redirectTo: '/homePage' },
];
