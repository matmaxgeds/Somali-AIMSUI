import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserOrgRegistrationComponent } from './user-org-registration/user-org-registration.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { ManagementComponent } from './management/management.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { NotificationComponent } from './notification/notification.component';
import { OrganizationsComponent } from './organizations/organizations.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent},
  { path: 'user-org-registration', component: UserOrgRegistrationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'reports', component: ReportsComponent},
  { path: 'management', component: ManagementComponent },
  { path: 'data-entry', component: DataEntryComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'organizations', component: OrganizationsComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);