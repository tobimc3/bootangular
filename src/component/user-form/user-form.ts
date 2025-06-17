import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Userservice } from '../../service/userservice';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./user-form.css']
})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: Userservice) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
