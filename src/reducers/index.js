import { combineReducers } from 'redux';
import todoList from './todoListReducer';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  todoList,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
