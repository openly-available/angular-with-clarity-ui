import { Component, OnInit, Input } from '@angular/core';
import {MatFormFieldModule,MatInputModule} from '@angular/material';

@Component({
    selector:'my-input',
    templateUrl: 'textbox.component.html',
    styleUrls:['./textbox.component.css']
})

export class TextBoxComponent {
    @Input() inputtype :string ="text";
    @Input() placeholdertext:string ="Username";
}