import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const ROUTE : Routes = [
  { path : 'layout', component : LayoutComponent, children : [
    { path : 'download', component : DownloadComponent},
    { path : 'contact', component : ContactComponent},
    { path : 'features', component : FeaturesComponent}  
  ] },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DownloadComponent,
    FeaturesComponent,
    FooterComponent,
    ContactComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // route module import
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
