import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componets/login/login.component';
// import { CambioPasswordComponent } from './cambio-password/cambio-password.component';
import { AppComponent } from './app.component';
// import { LoaderComponent } from './componets/loader/loader.component';
// import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
// import { RecuperarMembresiaComponent } from './recuperar-membresia/recuperar-membresia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // CambioPasswordComponent,
    // LoaderComponent,
    // RecuperarPasswordComponent,
    // RecuperarMembresiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
