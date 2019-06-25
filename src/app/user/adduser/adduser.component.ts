import { Component, OnInit,ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { User } from "../models/user.model";
import { ListuserComponent } from "../listuser/listuser.component";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //directives: [ListuserComponent]
})
export class AdduserComponent implements OnInit {

  userForm: FormGroup;
  @ViewChild(ListuserComponent) child:ListuserComponent;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      userpass: ["", Validators.required],
      location: ["", Validators.required],
      joindate: ["", Validators.required],
      salary: ["", Validators.required]
    });
  }
  createUser(){
    const newuser: User = {
      username: this.userForm.get("username").value,
      email: this.userForm.get("email").value,
      userpass: this.userForm.get("userpass").value,
      location: this.userForm.get("location").value,
      joindate: this.userForm.get("joindate").value,
      salary: this.userForm.get("salary").value,
      userid:0,
      isActive:true
    };
    this.store.dispatch(new userActions.CreateUser(newuser));
    debugger;
    //this.store.dispatch(new userActions.LoadUsers());
    //this.userForm.reset();
  }

}
