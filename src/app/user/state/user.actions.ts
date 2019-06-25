import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { User } from "../models/user.model";

export enum UserActionTypes {
    LOGIN = "[User] Login",
    LOGIN_SUCCESS = "[User] Login Success",
    LOGIN_FAIL = "[User] Login Fail",

    LOAD_USERS = "[User] Load UserS",
    LOAD_USERS_SUCCESS = "[User] Load UserS Success",
    LOAD_USERS_FAIL = "[User] Load UserS Fail",

    CREATE_USER = "[User] Create User",
    CREATE_USER_SUCCESS = "[User] Create User Success",
    CREATE_USER_FAIL = "[User] Create User Fail",

}
export class Login implements Action {
    readonly type = UserActionTypes.LOGIN;

    //readonly type = CustomerActionTypes.LOAD_CUSTOMER;

    constructor(public payload: User) {}
  }
  
  export class LoginSuccess implements Action {
    readonly type = UserActionTypes.LOGIN_SUCCESS;
  
    constructor(public payload: User) {}
  }
  
  export class LoginFail implements Action {
    readonly type = UserActionTypes.LOGIN_FAIL;
  
    constructor(public payload: string) {}
  }


  export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS;
  }
  
  export class LoadUsersSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
  
    constructor(public payload: User[]) {}
  }
  
  export class LoadUsersFail implements Action {
    readonly type = UserActionTypes.LOAD_USERS_FAIL;
  
    constructor(public payload: string) {}
  }


  export class CreateUser implements Action {
    readonly type = UserActionTypes.CREATE_USER;
  
    constructor(public payload: User) {}
  }
  
  export class CreateUserSuccess implements Action {
    readonly type = UserActionTypes.CREATE_USER_SUCCESS;
  
    constructor(public payload: User[]) {}
  }
  
  export class CreateUserFail implements Action {
    readonly type = UserActionTypes.CREATE_USER_FAIL;
  
    constructor(public payload: string) {}
  }

  export type Action =Login | LoginSuccess | LoginFail | LoadUsers | LoadUsersSuccess | LoadUsersFail |
  CreateUser | CreateUserSuccess | CreateUserFail
  ;