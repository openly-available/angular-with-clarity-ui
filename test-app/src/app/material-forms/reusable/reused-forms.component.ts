import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatFormFieldModule,MatInputModule,MatCheckboxModule} from '@angular/material';

@Component({
    templateUrl: 'reused-forms.component.html',
})

export class ReusedFormsComponent {
    Submit(){
        alert("Registered");
    }
}