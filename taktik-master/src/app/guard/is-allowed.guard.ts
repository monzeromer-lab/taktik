import { CanActivateFn } from '@angular/router';

export const isAllowedGuard: CanActivateFn = (route, state) => {
  return true;
};
