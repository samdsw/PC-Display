import { Component, inject } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth';

@Component({
  selector: 'app-spotify',
  imports: [],
  templateUrl: './spotify.html',
  styleUrl: './spotify.css',
})
export class Spotify {
    private readonly spotifyAuthService = inject(SpotifyAuthService);

    startSpotifyLogin() {
        this.spotifyAuthService.startLogin();
    }
}
