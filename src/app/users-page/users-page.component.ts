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
  loadedUsers: User[] = [];
  listOfUsers: User[] = [];
  nameSortParam: 'asc' | 'desc' = 'desc';
  dateSortParam: 'asc' | 'desc' = 'asc';

  constructor(private requestUsers: RequestsUser, private router: Router) {};

  ngOnInit() {
    this.requestUsers.getUsers().subscribe((users: Record<string, any>) => {
      for (const id in users) {
        this.loadedUsers.push({
          id,
          name: users[id].name,
          date: users[id].date,
          permissions: users[id].permissions,
        })
      }
    });

    this.listOfUsers = this.loadedUsers;
  }

  onSortName() {
    if (this.nameSortParam === 'desc') {
      this.listOfUsers.sort((a, b) => a.name.localeCompare(b.name));
      this.nameSortParam = 'asc';
    } else {
      this.listOfUsers.reverse();
      this.nameSortParam = 'desc';
    }

    this.dateSortParam = 'asc';
  }

  onSortDate() {
    if (this.dateSortParam === 'asc') {
      this.listOfUsers.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        return dateA - dateB;
      });
      this.dateSortParam = 'desc';
    } else {
      this.listOfUsers.reverse();
      this.dateSortParam = 'asc';
    }

    this.nameSortParam = 'desc';
  }
}
