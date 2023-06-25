import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ErrorComponent },
  // Other routes specific to the module...
];
@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class ErrorModule { }
