import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';


export class APIResolver implements Resolve<Observable<any>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return new Observable(subscriber => {
      subscriber.next('Hello Alligator');
      setTimeout(() => {
        subscriber.complete();
      }, 2000);
    });
  }

}
