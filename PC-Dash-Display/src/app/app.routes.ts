import { Routes } from '@angular/router';
import { SpotifyCallback } from './components/spotify-callback/spotify-callback';

export const routes: Routes = [
    {
        path: 'spotify/callback',
        component: SpotifyCallback,
    }
];
