import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsUser } from '../requests/users';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  addUserForm: FormGroup;
  name = new FormControl('');
  permissions = [
    { value: 'read', label: 'Read' },
    { value: 'write', label: 'Write' },
    { value: 'delete', label: 'Delete' },
  ]
  selectedValues: string[] = [];

  constructor(private formBuilder: FormBuilder, private requestUsers: RequestsUser, private router: Router) {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.permissions.forEach(permission => {
      const control = new FormControl(false);
      this.addUserForm.addControl(permission.value, control);
    })

    this.addUserForm.valueChanges.subscribe(values => {
      this.selectedValues = Object.keys(values).filter(key => values[key] && key !== 'name');
    })
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const date = new Date;
  
      this.requestUsers.addUser({
        name: this.addUserForm.get('name')?.value,
        date: date.toUTCString(),
        permissions: this.selectedValues,
      }).subscribe(() => {
        this.addUserForm.reset();
        this.selectedValues = [];

        this.router.navigate(['/users']);
      });
    }
  }
}
