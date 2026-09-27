import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { SystemMetricsService } from '../../services/system-metrics';

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

export class PcStats implements OnInit, OnDestroy {
  // Create one persistent signal that stores the current three metric cards.
  // Calling metrics() reads this signal in the template; it must not create a
  // new signal every time it is called.
  readonly metrics = signal<SystemMetric[]>([]);

  private readonly systemMetricsService = inject(SystemMetricsService);

  private refreshTimerId?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.refreshMetrics();

    this.refreshTimerId = setInterval(() => {
      this.refreshMetrics();
    }, 3000);
  }

  ngOnDestroy() {
    if (this.refreshTimerId) {
      clearInterval(this.refreshTimerId);
    }
  }

  refreshMetrics() {
    this.systemMetricsService.getSystemMetrics().subscribe((response) => {
      const updatedMetrics: SystemMetric[] = [
        { name: 'CPU', usage: response.cpu.usage ?? 0, detail: `` },
        { name: 'GPU', usage: response.gpu.usage ?? 0, detail: `${response.gpu.temperature ?? 0}°C` },
        { name: 'RAM', usage: response.ram.usage ?? 0, detail: `${response.ram.usedGb ?? 0}GB` },
      ];
      this.metrics.set(updatedMetrics);
    });
  }
}
