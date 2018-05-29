import {User} from '../models/user.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'coca',
            hobbies: [
                'coder',
                'la dégustation du café'
                    ]
        }

    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}
