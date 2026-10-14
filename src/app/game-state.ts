import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameState {
  private granted = false;

  grantAccess(): void {
    this.granted = true;
  }

  hasAccess(): boolean {
    return this.granted;
  }
}