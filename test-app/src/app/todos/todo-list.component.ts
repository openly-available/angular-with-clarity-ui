import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'clarity-icons'
import 'clarity-icons/shapes/essential-shapes';
import { Todo } from "./todo-list.model"

@Component({
    templateUrl: 'todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
    id: number;
    TodoList: Array<any> = new Array<any>();
    NewTodo: Todo = new Todo();
    TodoTitle: string;
    constructor(private route: ActivatedRoute, private http: Http) {
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.PageLoad();
    }
    PageLoad() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.id)
            .subscribe(
            data => { this.TodoList = data.json() },
            err => {
                console.log('Unable to fetch Todo!');
            }
            );
    }
    StatusChange(todoObj) {
        todoObj.completed = !todoObj.completed;
        this.http.post('https://jsonplaceholder.typicode.com/todos', todoObj)
            .subscribe(
            data => {
                console.log(data.json())
                alert("Status changed successfully");
            },
            err => {
                console.log('Something went wrong');
            }
            );
    }
    DeleteTodo(todoObj) {
        this.http.delete('https://jsonplaceholder.typicode.com/todos/' + todoObj.id)
            .subscribe(
            data => {
                console.log(data.json())
                let index = this.TodoList.indexOf(todoObj);
                this.TodoList.splice(index, 1);
                alert("Todo Deleted successfully");
            },
            err => {
                console.log('Something went wrong');
            }
            );
    }
    CreateToDo() {
        this.NewTodo.completed = false;
        this.NewTodo.userId = this.id;
        this.NewTodo.title = this.TodoTitle;

        this.http.post('https://jsonplaceholder.typicode.com/todos', this.NewTodo)
            .subscribe(
            data => {
                console.log(data.json());
                this.TodoList.push(data.json());
                this.TodoTitle = '';
                alert("Todo Created successfully");
            },
            err => {
                console.log('Something went wrong!');
            }
            );
    }
}