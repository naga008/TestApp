import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { UserService } from "../user.service";
import * as userActions from "../state/user.actions";
import { User } from "../models/user.model";

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions
    ,
    private userService: UserService
  ) {}


@Effect()
loadUser$: Observable<Action> = this.actions$.pipe(
  ofType<userActions.Login>(
    userActions.UserActionTypes.LOGIN
  ),
  mergeMap((action: userActions.Login) =>
    this.userService.Login(action.payload).pipe(
      map(
        (user: User) =>
          new userActions.LoginSuccess(user)
      ),
      catchError(err => of(new userActions.LoginFail(err)))
    )
  )
);

@Effect()
loadUsers$: Observable<Action> = this.actions$.pipe(
  ofType<userActions.LoadUsers>(
    userActions.UserActionTypes.LOAD_USERS
  ),
  mergeMap((action: userActions.LoadUsers) =>
    this.userService.getUsers().pipe(
      map(
        (users: User[]) =>
        
          
          new userActions.LoadUsersSuccess(users)
        
      ),
      catchError(err => of(new userActions.LoadUsersFail(err)))
    )
  )
);

@Effect()
createUser$: Observable<Action> = this.actions$.pipe(
  ofType<userActions.CreateUser>(
    userActions.UserActionTypes.CREATE_USER
  ),
  map((action: userActions.CreateUser) => action.payload),
  mergeMap((user: User) =>
    this.userService.createUser(user).pipe(
      map(
        (newUser: User[]) =>
          new userActions.CreateUserSuccess(newUser)
      ),
      catchError(err => of(new userActions.CreateUserFail(err)))
    )
  )
);

}