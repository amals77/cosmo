import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SubcatinfoComponent} from './subcatinfo/subcatinfo.component'
import {ProductinfoComponent} from './productinfo/productinfo.component'
import {ShowcaseinfoComponent} from './showcaseinfo/showcaseinfo.component'
import {CartComponent} from './cart/cart.component'
import {HomepageComponent} from './homepage/homepage.component'
import {SummerinfoComponent} from './summerinfo/summerinfo.component'
import {SscaseinfoComponent} from './sscaseinfo/sscaseinfo.component'
import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"cosmo",component:HomepageComponent},
  {path:"subcat",component:SubcatinfoComponent},
{path:"products",component:ProductinfoComponent},
{path:"showcase",component:ShowcaseinfoComponent},
{path:"cart",component:CartComponent},
{path:"summer",component:SummerinfoComponent},
{path:"sscase",component:SscaseinfoComponent},
{path:"login",component:LoginComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
