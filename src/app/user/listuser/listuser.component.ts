import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  customers$: Observable<User[]>;
  error$: Observable<String>;
  constructor(private store: Store<fromUser.AppState>) { }
  use:User;
  ngOnInit() {
    this.store.dispatch(new userActions.LoadUsers());
    this.customers$ = this.store.pipe(select(fromUser.getListUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));
    debugger;
    
    this.customers$.subscribe(o=>{ 
      debugger;
      var x=o;
    });

    this.store.pipe(select(fromUser.getUsers)).subscribe(o=> 
      {
        debugger;
        this.use= o;
        if(this.use){
        if(this.use.email){
          //this.router.navigateByUrl("/user");
        }
      }
        //this.
      });
  }

}
