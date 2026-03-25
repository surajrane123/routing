import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {

  name = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');

  userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    // dummy pre-fill
    this.name.setValue("Demo");
    this.email.setValue("demo@gmail.com");
    this.age.setValue("25");
  }

  editUser() {
    const data = {
      name: this.name.value,
      email: this.email.value,
      age: Number(this.age.value)
    };

    this.userService.updateUser(this.userId, data).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}