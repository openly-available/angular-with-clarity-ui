import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatFormFieldControl } from '@angular/material';

import { MaterialFormsComponent } from './material-forms.component';
import { ReusedFormsComponent } from './reusable/reused-forms.component';
import { MaterialFormsRoutingModule } from './material-forms.routing';

import { TextBoxComponent } from '../core/components/textbox/textbox.component';


@NgModule({
    declarations: [MaterialFormsComponent, ReusedFormsComponent, TextBoxComponent],
    imports: [
        RouterModule,
        MaterialFormsRoutingModule,
        MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    ],
    exports: [MaterialFormsComponent]
})
export class MaterialFormdModule { }