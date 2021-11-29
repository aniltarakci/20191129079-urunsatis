import { DataService } from './components/services/data.service';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import { AdminpaneliComponent } from './components/adminpaneli/adminpaneli.component';
import { SepetimComponent } from './components/sepetim/sepetim.component';
import { SiparislerimComponent } from './components/siparislerim/siparislerim.component';
import { UrunComponent } from './components/urun/urun.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskComponent } from './components/ask/ask.component';
import { BilimComponent } from './components/bilim/bilim.component';
import { CocukComponent } from './components/cocuk/cocuk.component';
import { KlasikComponent } from './components/klasik/klasik.component';
import { PolisiyeComponent } from './components/polisiye/polisiye.component';
import { PsikolojiComponent } from './components/psikoloji/psikoloji.component';
import { RomanComponent } from './components/roman/roman.component';
import { UrunekleComponent } from './components/urunekle/urunekle.component';
import { UrunsilComponent } from './components/urunsil/urunsil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AskComponent,
    BilimComponent,
    CocukComponent,
    KlasikComponent,
    PolisiyeComponent,
    PsikolojiComponent,
    RomanComponent,
    UrunComponent,
    UrunekleComponent,
    UrunsilComponent,
    SiparislerimComponent,
    SepetimComponent,
    AdminpaneliComponent,
    UyelerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
