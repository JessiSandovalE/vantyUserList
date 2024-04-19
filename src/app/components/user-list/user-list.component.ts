import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserServiceService } from '../../services/user-service.service';
import { FilterBoxComponent } from '../filter-box/filter-box.component';
import { NameFilterPipe } from '../../pipes/text-filter.pipe';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FilterBoxComponent, NameFilterPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() searchFilter: string = "";
  filterText: string = "";

  constructor(private userService:UserServiceService){}

  users: User[] = [];

  ngOnInit():void {
    this.getUserList();
  }

  async getUserList () {
    this.filterText = "";
    this.users = await this.userService.getUsers();
  }

  async filterUser (event: any) {
    this.filterText = event;
  }



}
