import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  play(src: string): void {
    if (!this.audio) {
      this.audio = new Audio();
    }
    if (this.audio.src !== src) {
      this.audio.src = src;
      this.audio.load();
    }
    this.audio
      .play()
      .catch((err) => console.error('Ошибка воспроизведения музыки:', err));
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}