import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameState } from './game-state';

export const winnerGuardGuard: CanActivateFn = () => {
  const gameState = inject(GameState);
  const router = inject(Router);

  return gameState.hasAccess() ? true : router.createUrlTree(['/']);
};