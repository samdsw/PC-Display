import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAuthService } from '../../services/spotify-auth';

@Component({
  selector: 'app-spotify-callback',
  imports: [],
  templateUrl: './spotify-callback.html',
  styleUrl: './spotify-callback.css',
})
export class SpotifyCallback implements OnInit{
  private readonly route = inject(ActivatedRoute);
  private readonly spotifyAuthService = inject(SpotifyAuthService); 
  
  statusMessage: string = 'Connecting to Spotify...';

  async ngOnInit(): Promise<void> {
    const code = this.route.snapshot.queryParamMap.get('code');
    const state = this.route.snapshot.queryParamMap.get('state');
    const error = this.route.snapshot.queryParamMap.get('error');

    if (error) {
      this.statusMessage = `Spotify authorization failed: ${error}`;
      return;
    }

    if (!code || !state) {
      this.statusMessage = 'Spotify did not return the authorization information.';
      return;
    }

    try {
      await this.spotifyAuthService.exchangeCodeForToken(code, state);
      this.statusMessage = 'Spotify connected successfully. Returning to dashboard...';

      window.setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (error) {
      console.error(error);
      this.statusMessage = 'Spotify connection failed. Check the browser console.';
    }

  }

}
