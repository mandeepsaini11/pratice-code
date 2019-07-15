import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CauseComponent } from './cause/cause.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { PageRoute } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CauseComponent,
    GalleryComponent, 
    NewsComponent,
    ContactComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(PageRoute)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
