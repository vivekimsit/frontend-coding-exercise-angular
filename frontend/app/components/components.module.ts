import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FiltersComponent } from './filters/filters.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FiltersComponent,
    StatusComponent,
  ],
  exports: [
    FiltersComponent,
    StatusComponent,
  ],
})
export class ComponentsModule {}

