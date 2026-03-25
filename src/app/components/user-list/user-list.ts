import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  usersData = signal<any[]>([]);

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe((data: any) => {
      this.usersData.set(data.products);
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.usersData.update(users =>
        users.filter(user => user.id !== id)
      );
    });
  }

  editUser(id: number) {
    this.router.navigate(['/edit', id]);
  }
}