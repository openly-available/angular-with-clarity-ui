import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MaterialFormsComponent } from './material-forms.component';
import { ReusedFormsComponent } from './reusable/reused-forms.component';

const FormsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MaterialFormsComponent
            },
            {
                path: 'reused',
                component: ReusedFormsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(FormsRoutes)],
    exports: [RouterModule]
})

export class MaterialFormsRoutingModule { }

