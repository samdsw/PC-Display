import { Component } from '@angular/core';

interface SystemMetric {
  name: string;
  usage: number;
  detail: string;
}

@Component({
  selector: 'app-pc-stats',
  imports: [],
  templateUrl: './pc-stats.html',
  styleUrl: './pc-stats.css',
})

export class PcStats {
    metrics: SystemMetric[] = [
    { name: 'CPU', usage: 45, detail: '65°C' },
    { name: 'GPU', usage: 70, detail: '75°C' },
    { name: 'RAM', usage: 60, detail: '8GB / 32GB' },
  ];  

  refreshMetrics() {
    // Logic to refresh system metrics goes here
    
  }
}
