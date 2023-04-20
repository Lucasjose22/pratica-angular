import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule} from '@angular/material/input';  
import {  MatButtonModule} from '@angular/material/button';   
import {  MatCardModule} from '@angular/material/card';   
import {  MatIconModule } from '@angular/material/icon';      
import { MatOptionModule} from '@angular/material/core' 
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
