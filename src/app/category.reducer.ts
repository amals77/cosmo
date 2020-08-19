import {ActionEx, CategoryActionTypes} from './category.actions';
export const initialState = [ActionEx];
export function CategoryReducer(state = initialState, action: ActionEx) {
  console.log("reducer exicuted")
  switch (action.type) {
    case CategoryActionTypes.CategorySelected:

      return [ action.payload.name];



  }
}
