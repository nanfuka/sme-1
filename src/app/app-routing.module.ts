import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PaymentnoticeComponent } from './paymentnotice/paymentnotice.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ApproveOrdersComponent } from './approve-orders/approve-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { InviteContactsComponent } from './invite-contacts/invite-contacts.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { VaultComponent } from './vault/vault.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BuyComponent } from './buy/buy.component';
import { PaymentssnoticeComponent } from './paymentssnotice/paymentssnotice.component';
import { PuComponent } from './pu/pu.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "buyerdashboard", component: BuyerDashboardComponent },
  { path: 'payment notice', component: PaymentssnoticeComponent },
  { path: 'orders', component: OrdersComponent},

  { path: 'approve-orders', component: ApproveOrdersComponent},
  { path: 'create-orders', component: CreateOrderComponent},
  { path: 'pending-orders', component: PendingOrdersComponent},
  { path: 'invite-contacts', component: InviteContactsComponent},
  { path: 'invoices', component: InvoicesComponent},
  { path: 'Vault', component: VaultComponent},
  { path: 'Account Settings', component: AccountSettingsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'pay', component: PaymentnoticeComponent},
  { path: 'pu', component: PuComponent},


  



  

  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
