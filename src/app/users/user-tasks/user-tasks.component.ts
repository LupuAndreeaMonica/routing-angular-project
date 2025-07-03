import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet, RouterLink
  ]
})
export class UserTasksComponent implements OnInit {
private activatedRoute = inject(ActivatedRoute);
private usersService = inject(UsersService);
userName = ''

ngOnInit(): void {
  console.log(this.activatedRoute)
  this.activatedRoute.paramMap.subscribe({
    next: paramMap=> this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || ''
  })
}
  // userId = input.required<string>();
  // private usersService = inject(UsersService);
  // userName = computed(() => 
  //   this.usersService.users.find(u => u.id === this.userId())?.name
  // );
  
}
