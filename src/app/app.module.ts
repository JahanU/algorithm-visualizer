import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlgorithmVisualizerComponent } from './algorithm-visualizer/algorithm-visualizer.component';
import { MatSelectModule } from '@angular/material/select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RouterModule, Routes } from '@angular/router';
import { SearchingAlgorithmsComponent } from './searching-algorithms/searching-algorithms.component'

const routes: Routes = [
  { path: 'algorithm', component: AlgorithmVisualizerComponent },
  { path: 'searching', component: SearchingAlgorithmsComponent },

  { path: '', redirectTo: '/searching', pathMatch: 'full' },
]

@NgModule({
  declarations: [AppComponent, AlgorithmVisualizerComponent, SearchingAlgorithmsComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
