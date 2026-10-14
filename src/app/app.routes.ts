import { Routes } from '@angular/router';
import { Game } from './game/game';
import { Winner } from './winner/winner';
import { winnerGuardGuard } from './winner-guard-guard';

export const routes: Routes = [
  { path: '', component: Game },
  { path: 'winner', component: Winner, canActivate: [winnerGuardGuard] },
  { path: '**', redirectTo: '' },
];
