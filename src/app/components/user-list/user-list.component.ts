// import { Store, select } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
// import { AppState } from '../../store/states/app.state';
// import { selectAllUsers } from '../../store/selectors/user.selector';
// import { GetUsers } from '../../store/actions/user.action';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[] = [];

  constructor(private _router: Router, private _userService: UserService) {}

  // constructor(private _store: Store<AppState>, private _router: Router) { }

  // users$ = this._store.pipe(select(selectAllUsers));

  ngOnInit() {
    // this._store.dispatch(new GetUsers());
  }

  viewUserDetail(user: User) {
    this._router.navigate(['user', user.id]);
  }

  deleteUser(user: User) {
    this._userService.deleteUser$(user).subscribe(
      message => console.log(message),
      err => console.log(err),
      () => console.log('Done')
    );
  }

}
