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

  // ✅ form controls
  name = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  // ✅ function when button clicked
  adduser() {

    const name = this.name.value;
    const email = this.email.value;
    const age = this.age.value;

    // ✅ validation
    if (name && email && age) {

      const data = {
        name: name,
        email: email,
        age: Number(age)
      };

      // ✅ API call
      this.userService.saveUser(data).subscribe((resp: any) => {
        console.log("User added:", resp);

        // ✅ redirect to user list
        this.router.navigate(['/']);
      });

      // ✅ clear inputs
      this.name.reset();
      this.email.reset();
      this.age.reset();
    } else {
      alert("Please fill all fields");
    }
  }
}