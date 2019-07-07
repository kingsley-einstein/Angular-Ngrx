import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { selectUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.action';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id$: number;
  constructor(private _store: Store<AppState>, private _route: ActivatedRoute) {
    _route.params.subscribe(params => this.id$ = params.id);
   }
  user$ = this._store.pipe(select(selectUser));

  ngOnInit() {
    this._store.dispatch(new GetUser(this.id$));
  }

}
