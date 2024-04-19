import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users: User[] = [{
    id:1,
    name: 'Jessica',
    email: 'test@test.com'
  }];
}
