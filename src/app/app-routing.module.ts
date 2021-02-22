import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'tax-planning-and-consulting',
    loadChildren: () => import('./tax-planning-and-consulting/tax-planning-and-consulting.module').then( m => m.TaxPlanningAndConsultingPageModule)
  },
  {
    path: 'credit-repair',
    loadChildren: () => import('./credit-repair/credit-repair.module').then( m => m.CreditRepairPageModule)
  },
  {
    path: 'income-tax-preparation',
    loadChildren: () => import('./income-tax-preparation/income-tax-preparation.module').then( m => m.IncomeTaxPreparationPageModule)
  },
  {
    path: 'new-business-setup',
    loadChildren: () => import('./new-business-setup/new-business-setup.module').then( m => m.NewBusinessSetupPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
