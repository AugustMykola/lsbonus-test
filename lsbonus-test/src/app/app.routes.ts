import { Routes } from '@angular/router';
import { BuilderPageComponent } from './pages/builder-page/builder-page.component';
import { authGuard } from './guards/auth.guard';
import { schemaResolver } from './resolvers/schema.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'builder', pathMatch: 'full' },
  {
    path: 'builder',
    component: BuilderPageComponent,
    canActivate: [authGuard],
    resolve: { schema: schemaResolver },
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'builder' }
];
