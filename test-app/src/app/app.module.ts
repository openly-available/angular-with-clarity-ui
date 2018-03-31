import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { ClarityModule } from 'clarity-angular';
import { HttpModule, RequestOptions, XHRBackend, Http } from "@angular/http";
import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatFormFieldControl } from '@angular/material';

import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';
import { TodoListComponent } from './todos/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    RouterModule.forRoot([
      { path: 'users', component: UserListComponent },
      { path: 'todo/:id', component: TodoListComponent },
      {
        path: 'material-forms', loadChildren: 'app/material-forms/material-forms.module#MaterialFormdModule',
      },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: "**", redirectTo: 'users', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
