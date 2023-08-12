import { Component } from '@angular/core';
import { RequestsUser } from '../requests/users';
import { Router } from '@angular/router';

// *NEED FIXES* change types to correct
interface User {
  date: string | any,
  name: string | any,
  id: string | any,
  permissions?: any,
}
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

  loadedUsers: {} = {};
  listOfUsers: User[] = [];

  constructor(private requestUsers: RequestsUser, private router: Router) {};

  ngOnInit() {
    this.requestUsers.getUsers().subscribe((users: Record<string, any>) => {
      for (const id in users) {
        this.listOfUsers.push({
          id,
          name: users[id].name,
          date: users[id].date,
          permissions: users[id].permissions,
        })
      }
    });
  }
}
