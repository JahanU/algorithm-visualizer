import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlgorithmVisualizerComponent } from './algorithm-visualizer/algorithm-visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmVisualizerComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
