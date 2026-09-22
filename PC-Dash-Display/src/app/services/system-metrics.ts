import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// This describes the JSON returned by the C# monitor service at /api/system.
// TypeScript will use it to check that Angular reads each metric correctly.
export interface SystemMetricsResponse {
  cpu: {
    usage: number | null;
  };
  ram: {
    usage: number | null;
    usedGb: number | null;
  };
  gpu: {
    name: string | null;
    usage: number | null;
    temperature: number | null;
    memoryUsage: number | null;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SystemMetricsService {
    private readonly http = inject(HttpClient);

    getSystemMetrics() {
        return this.http.get<SystemMetricsResponse>('http://localhost:5000/api/system');
    }

}
