import {Component, computed, inject, input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet, RouterLink
  ]
})
export class UserTasksComponent {
  // private activatedRoute = inject(ActivatedRoute);
  // private usersService = inject(UsersService);
  userName = input.required<string>();
  message = input.required<string>();

  // ngOnInit(): void {
  //   console.log('input data', this.message())
  //   // console.log(this.activatedRoute.snapshot)
  //   // console.log(this.activatedRoute.snapshot.paramMap.get('userId'))
  //   this.activatedRoute.paramMap.subscribe({
  //     next: paramMap => this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || ''
  //   })
  // }

  // userId = input.required<string>();
  // private usersService = inject(UsersService);
  // userName = computed(() =>
  //   this.usersService.users.find(u => u.id === this.userId())?.name
  // );
}
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const userService = inject(UsersService);
  const userName = this.usersService.users.find(u => u.id === activatedRoute.paramMap.get('userId'))?.name || ''
  return
}
