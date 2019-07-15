import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CauseComponent } from "./cause/cause.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { NewsComponent } from "./news/news.component";

export const PageRoute =
[
    {path:'home', component:HomeComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'cause', component:CauseComponent},
    {path:'contact', component:ContactComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'news', component:NewsComponent},
    {path:'', component:HomeComponent},

];