import { Component } from '@angular/core';

interface SystemMetric {
  name: string;
  usage: number;
  detail: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent {
  metrics: SystemMetric[] = [
    { name: 'CPU', usage: 45, detail: '65°C' },
    { name: 'GPU', usage: 70, detail: '75°C' },
    { name: 'RAM', usage: 60, detail: '8GB / 32GB' },
  ];  

  refreshMetrics() {
    // Logic to refresh system metrics goes here
    
  }
}
