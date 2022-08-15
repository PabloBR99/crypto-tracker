import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';

const routes: Routes = [
  { path: '', component: CryptoListComponent },
  { path: 'crypto-details', component: CryptoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
