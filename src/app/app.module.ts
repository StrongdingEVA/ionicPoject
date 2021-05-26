import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';

//components
import { HomeComponent } from '../components/home/home.component';
import { PostComponent } from '../components/post/post.component';
import { LoginComponent } from '../components/login/login.component';


//components  common
import { BarComponent } from '../components/common/bar/bar.component';

//imports
import { HttpClientModule } from '@angular/common/http';

//serices
import { ClientService } from '../services/http/client.service';
import { CookieService } from '../services/cookie/cookie.service';
import { SessionService } from '../services/session/session.service';
import { RouterService } from '../services/routes/router.service';
import { LocalStorageService } from '../services/localStorage/local-storage.service';


@NgModule({
  declarations: [AppComponent, HomeComponent, PostComponent, LoginComponent, BarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule],
  providers: [
    ImagePicker,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  exports: [
    ClientService,
    CookieService,
    LocalStorageService,
    SessionService,
    RouterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
