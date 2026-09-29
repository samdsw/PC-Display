import { Injectable } from '@angular/core';
import { spotifyConfig } from '../config/spotify.config';

export interface SpotifyAuthResponse {
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})

export class SpotifyAuthService {

    async startLogin() {
        const codeVerifier = this.generateCodeVerifier();
        const state = this.generateCodeVerifier();
        const codeChallenge = await this.createCodeChallenge(codeVerifier);

        sessionStorage.setItem('spotify_code_verifier', codeVerifier);
        sessionStorage.setItem('spotify_state', state);

        const authURL = new URL('https://accounts.spotify.com/authorize');

        authURL.search = new URLSearchParams({
            client_id: spotifyConfig.clientId,
            response_type: 'code',
            redirect_uri: spotifyConfig.redirectUri,
            scope: spotifyConfig.scopes.join(' '),
            state: state,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge
        }).toString();

        window.location.href = authURL.toString();
    }

    async exchangeCodeForToken(code: string, returnState: string): Promise<SpotifyAuthResponse> {
        const expectedState = sessionStorage.getItem('spotify_state');
        const codeVerifier = sessionStorage.getItem('spotify_code_verifier');

        if (!expectedState || expectedState !== returnState) {
            throw new Error('Spotify state validation failed');
        }

        if (!codeVerifier) {
            throw new Error('Spotify code verifier not found');
        }

          const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
            client_id: spotifyConfig.clientId,
            grant_type: 'authorization_code',
            code,
            redirect_uri: spotifyConfig.redirectUri,
            code_verifier: codeVerifier,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to exchange code for token');
        }

        const tokens = await response.json();   

        sessionStorage.setItem('spotify_access_token', tokens.access_token);

        if (tokens.refresh_token) {
            sessionStorage.setItem('spotify_refresh_token', tokens.refresh_token);
        }

        sessionStorage.removeItem('spotify_code_verifier');
        sessionStorage.removeItem('spotify_state');

        return tokens;
    }

    generateCodeVerifier(): string {
        const array = new Uint8Array(32);
        window.crypto.getRandomValues(array);
        return this.base64UrlEncode(array);
    }

    async createCodeChallenge(verifier: string): Promise<string> {
        const encoder = new TextEncoder();
        const data = encoder.encode(verifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return this.base64UrlEncode(new Uint8Array(digest));
    }

    base64UrlEncode(bytes: Uint8Array): string {
        let binary = '';
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
}
