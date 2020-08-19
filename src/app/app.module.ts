import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubcatinfoComponent } from './subcatinfo/subcatinfo.component';
import { SubcatviewComponent } from './subcatview/subcatview.component';
import { ContentComponent } from './content/content.component';
import { CategoryReducer } from './category.reducer';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductviewComponent } from './productview/productview.component';
import { ShowcaseinfoComponent } from './showcaseinfo/showcaseinfo.component';
import { ShowcaseviewComponent } from './showcaseview/showcaseview.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './deals/deals.component';
import { HotdealsComponent } from './hotdeals/hotdeals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SummerComponent } from './summer/summer.component';
import { SummerinfoComponent } from './summerinfo/summerinfo.component';
import { SscaseinfoComponent } from './sscaseinfo/sscaseinfo.component';
import { SscaseviewComponent } from './sscaseview/sscaseview.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubcatinfoComponent,
    SubcatviewComponent,
    ContentComponent,
    ProductinfoComponent,
    ProductviewComponent,
    ShowcaseinfoComponent,
    ShowcaseviewComponent,
    CartComponent,
    FooterComponent,
    TimerComponent,
    HomeComponent,
    DealsComponent,
    HotdealsComponent,
    HomepageComponent,
    SummerComponent,
    SummerinfoComponent,
    SscaseinfoComponent,
    SscaseviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ category: CategoryReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
