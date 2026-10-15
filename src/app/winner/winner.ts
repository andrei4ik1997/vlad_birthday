import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { AudioService } from '../audio';

@Component({
  imports: [],
  selector: 'app-winner',
  styleUrl: './winner.scss',
  templateUrl: './winner.html',
})
export class Winner implements OnInit, OnDestroy {
  private readonly audioService = inject(AudioService);

  ngOnInit(): void {
    this.audioService.play('assets/tokyo-drift.mp3');
  }

  ngOnDestroy(): void {
    this.audioService.stop();
  }
}