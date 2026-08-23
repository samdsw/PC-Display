import { Component } from '@angular/core';
import { PcStats } from '../components/pc-stats/pc-stats';
import { GameStats } from '../components/game-stats/game-stats';
import { Spotify } from '../components/spotify/spotify';
import { Discord  } from '../components/discord/discord';


@Component({
  selector: 'app-home',
  imports: [PcStats, GameStats, Spotify, Discord],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent {}