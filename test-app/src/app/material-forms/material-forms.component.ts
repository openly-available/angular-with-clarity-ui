import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatFormFieldModule,MatInputModule,MatCheckboxModule} from '@angular/material';

@Component({
    templateUrl: 'material-forms.component.html',
    styleUrls:['./meterial-forms.component.css']
})

export class MaterialFormsComponent {
    Submit(){
        alert("Logged in");
    }
}