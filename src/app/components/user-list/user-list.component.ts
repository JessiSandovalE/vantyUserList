import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  constructor(private userService:UserServiceService){}

  users: User[] = [];

  ngOnInit():void {
    this.getUserList();
  }

  async getUserList () {
    this.users = await this.userService.getUsers();
  }

  fav(gameName: string){
    alert
  }
}
