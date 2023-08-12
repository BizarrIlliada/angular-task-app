import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsUser } from '../requests/users';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  currentUser!: User;
  constructor(private requestUser: RequestsUser, private route: ActivatedRoute) {}

  ngOnInit() {
    let user: User;
    const userId = this.route.snapshot.params['userId'];

    this.requestUser.getUsers(userId).subscribe(user => {
      this.currentUser = { ...user, id: userId as string} as User;
    });
  }
}
