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
import {routes} from "../../app.routes";

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
  // private usersService = inject(UsersService);
  userName = input.required<string>();
  message = input.required<string>();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: data => {
        console.log(data)
      }
    })
  }

  // userId = input.required<string>();
  // private usersService = inject(UsersService);
  // userName = computed(() =>
  //   this.usersService.users.find(u => u.id === this.userId())?.name
  // );
}
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const userService = inject(UsersService);
  const userName = userService.users.find(u => u.id === activatedRoute.paramMap.get('userId'))?.name || ''
  return userName
}

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
}
