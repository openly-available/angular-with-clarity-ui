import { Component } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

@Component({
    templateUrl: 'user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    constructor(public http: Http) {
        this.PageLoad();
    }

    UsersList:Array<any> = new Array<any>()

    PageLoad() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          data => { this.UsersList = data.json()},
          err => {
            console.log('Something went wrong!');
          }
        );

    }
}

