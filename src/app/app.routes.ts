import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { userRoutes } from './users/users.routes'

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'tasks',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path: 'tasks',
        //         component: TasksComponent
        //     },
        //     {
        //         path: 'tasks/new',
        //         component: NewTaskComponent
        //     }
        // ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]
