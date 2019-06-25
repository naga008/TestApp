import * as userActions from "./user.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { User } from "../models/user.model";
import * as fromRoot from "../../state/app-state";

export interface UserState extends EntityState<User>{
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    users:User[],
    // error message
    //errorMessage: string | null;

    selectedUserId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;

  }

  export interface AppState extends fromRoot.AppState {
    users: UserState;
  }

  export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: UserState = {
    ids: [],
    entities: {},
    users:[],
    isAuthenticated: false,
    user: null,
    selectedUserId: null,
    loading: false,
    loaded: false,
    error: ""
};

  export const initialState = userAdapter.getInitialState(defaultUser);

  export function userReducer(
    state = initialState,
    action: userActions.Action
  ): UserState {
    switch (action.type) {
        case userActions.UserActionTypes.LOGIN_SUCCESS: {
            return userAdapter.addOne(action.payload, {
              ...state,
              //ids:action.payload,
              selectedCustomerId: action.payload.userid,
              user:action.payload,
              
              loading:false,
              loaded:true
            });
          }
          case userActions.UserActionTypes.LOGIN_FAIL: {
            return {
                ...state,
                user:null,
                error: action.payload,
                loading:false,
              loaded:true
            };
          }
          case userActions.UserActionTypes.LOAD_USERS_SUCCESS: {
            return userAdapter.addAll(action.payload, {
              ...state,
              selectedUserId:1,
              
              users:action.payload,
              loading: false,
              loaded: true
            });
          }
          case userActions.UserActionTypes.LOAD_USERS_FAIL: {
            return {
              ...state,
              entities: {},
              loading: false,
              loaded: false,
              error: action.payload
            };
          }
          case userActions.UserActionTypes.CREATE_USER_SUCCESS: {
            return userAdapter.addAll(action.payload, {
              ...state,
              selectedUserId:1,
              users:action.payload,
              loading: false,
              loaded: true
            });
          }
          case userActions.UserActionTypes.CREATE_USER_FAIL: {
            return {
              ...state,
              error: action.payload
            };
          }
          default: {
            return state;
          }
    }
}

const getUserFeatureState = createFeatureSelector<UserState>(
    "users"
  );
  
  export const getUsers = createSelector(
    getUserFeatureState,
    (state: UserState) => state.user
    //userAdapter.getSelectors().selectAll
  );
  export const getListUsers = createSelector(
    getUserFeatureState,
    (state: UserState) => state.users
    //userAdapter.getSelectors().selectAll
  );
  export const getUsersLoading = createSelector(
    getUserFeatureState,
    (state: UserState) => state.loading
  );
  
  export const getUsersLoaded = createSelector(
    getUserFeatureState,
    (state: UserState) => state.loaded
  );
  
  export const getError = createSelector(
    getUserFeatureState,
    (state: UserState) => state.error
  );