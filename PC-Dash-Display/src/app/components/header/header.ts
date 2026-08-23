import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly currentTime = signal('');
  readonly currentDate = signal('');

  private clockTimerId?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.updateClock();

    this.clockTimerId = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.clockTimerId) {
      clearInterval(this.clockTimerId);
    }
  }

  private updateClock() {
    const now = new Date();

    this.currentTime.set(
      now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      }),
    );

    this.currentDate.set(
      now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    );
  }
}