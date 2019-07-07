import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { selectAllUsers } from '../../store/selectors/user.selector';
import { GetUsers } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }
  users$ = this._store.pipe(select(selectAllUsers));

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

}
