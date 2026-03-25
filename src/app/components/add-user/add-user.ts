import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  name = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  adduser() {

    const data = {
      name: this.name.value,
      email: this.email.value,
      age: Number(this.age.value)
    };

    if (data.name && data.email && data.age) {
      this.userService.saveUser(data).subscribe(() => {
        this.router.navigate(['/']);
      });

      this.name.reset();
      this.email.reset();
      this.age.reset();
    }
  }
}