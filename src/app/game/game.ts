import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from '../game-state';

@Component({
  imports: [],
  selector: 'app-game',
  styleUrl: './game.scss',
  templateUrl: './game.html',
})
export class Game {
  private readonly TARGET = 29;
  protected readonly counter = signal(0);
  protected readonly boosting = signal(false);
  protected readonly target = this.TARGET;

  private readonly router = inject(Router);
  private readonly gameState = inject(GameState);

  protected onPictureClick(): void {
    const next = this.counter() + 1;
    this.counter.set(next);

    this.boosting.set(true);
    setTimeout(() => this.boosting.set(false), 150);

    if (next >= this.TARGET) {
      this.gameState.grantAccess();
      this.router.navigate(['/winner']);
    }
  }
}
