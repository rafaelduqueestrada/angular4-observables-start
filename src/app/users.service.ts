import {Subject} from 'rxjs/Subject';

export class UsersService {
  // Subject is the Observer and the Observable in the same time!
  userActivated = new Subject();
}
