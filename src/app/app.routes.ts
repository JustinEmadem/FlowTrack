import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { UserListComponent } from './pages/users/user-list/user-list.component.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title: 'FlowTrack - Checche',
      },
      {
        path:'users',
        component:UserListComponent,
        title: 'FlowTrack - Checche',
      },
      {
        path:'profile',
        component:ProfileComponent,
        title: 'FlowTrack - Checche',
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title: 'FlowTrack - Checche',
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title: 'FlowTrack - Checche',
      },
    ]
  },
  {
    path:'signin',
    component:SignInComponent,
    title:'Angular Sign In Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'Angular Sign Up Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
];
