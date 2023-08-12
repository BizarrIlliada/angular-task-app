import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  addUserForm: FormGroup;
  name = new FormControl('')
  permissions = [
    { value: 'read', label: 'Read' },
    { value: 'write', label: 'Write' },
    { value: 'delete', label: 'Delete' },
  ]
  selectedValues: string[] = [];

  constructor(private formBuilder: FormBuilder) {
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

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
