import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from "./leads";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lead'
    },
    {
        path: 'lead',
        pathMatch: 'full',
        component: LeadComponent,
        data: {
            animation: {
                value: 'lead'
            }
        }
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });