import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  usersData = signal<any[]>([]);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.usersData.set(data.products); // ✅ correct
    });
  }
}

