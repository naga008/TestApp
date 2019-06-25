import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  users$: Observable<User>;
  use:User;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>,
    private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Username: ["", Validators.required],
      Userpass: ["", Validators.required],
      Location:[''],
      Joindate: [''],
      IsActive:[true],
      Salary:['1000000']
    });
  }
  Login(){
    const user: User = {
      username: this.userForm.get("Username").value,
      userpass: this.userForm.get("Userpass").value,
      email:'',
      location:'',
      joindate: '',
      isActive:true,
      salary:'1000000',
      userid:1
    };
    this.store.dispatch(new userActions.Login(user));
    debugger;
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.store.pipe(select(fromUser.getUsers)).subscribe(o=> 
      {
        
        this.use= o;
        if(this.use){
        if(this.use.email){
          this.router.navigateByUrl("/user");
        }
      }
        //this.
      });
      var y=this.store.pipe(select(fromUser.getUsers)).subscribe(o=> 
       // this.use= o
        console.log(o)
  
        )
  }

}
