import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  fg: FormGroup;
  name: FormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private fb: FormBuilder, private _userService: UserService) { 
    this.fg = fb.group({
      name: this.name
    });
  }

  ngOnInit() {
  }

  addUser() {
    const possible: string[] = [
      'A', 'B', 'C', 'D', 'E',
      'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y',
      'Z',
      'a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y',
      'z',
      '1', '2', '3', '4', '5',
      '6', '7', '8', '9', '0'
    ];
    let token: string = '';
    const user: any = this.fg.value;
    for (let i = 0; i < possible.length; i++) {
      const character: string = possible[Math.floor(
        Math.random() * i
      )];
      token += character;
    }
    user.token = token;
    this._userService.createUser$(user).subscribe(
      u => console.log(u),
      err => console.log(err),
      () => console.log('Completed')
    );
    this.fg.reset();
  }

}
