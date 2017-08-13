import {Routes,RouterModule} from '@angular/router';
import {LandingPageComponent,AddContactPageComponent,ThankYouPageComponent} from "./leads";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
    },
    {
        path: 'contact/create',
        pathMatch: 'full',
        component: AddContactPageComponent,
    },
    {
        path: 'thank-you',
        pathMatch: 'full',
        component: ThankYouPageComponent,
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });