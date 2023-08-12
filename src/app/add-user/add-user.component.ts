import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private requestUsers: RequestsUser) {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.permissions.forEach(permission => {
      const control = new FormControl(false);
      this.addUserForm.addControl(permission.value, control);
    })

    this.addUserForm.valueChanges.subscribe(values => {
      this.selectedValues = Object.keys(values).filter(key => values[key] && key !== 'name')
      
      console.log(this.selectedValues);
    })
  }

  async onSubmit() {
    const date = new Date;
    console.log(date.getTime());

    console.log(this.addUserForm.get('name')?.value);
    
    

    await this.requestUsers.addUser({
      name: this.addUserForm.get('name')?.value,
      date: date.getTime(),
      permissions: this.selectedValues,
    }).subscribe();

    this.addUserForm.reset();
    this.selectedValues = [];
  }
}
