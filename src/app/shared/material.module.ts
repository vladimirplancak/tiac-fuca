import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule
    
  ],
  declarations: []
})
export class MaterialModule { }
