import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import produce from 'immer';

const initialState = {
attractions:[],
location:{}
};

const reduce=produce((state,action)=>{
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
   
    case 'SET_ATTRACTIONS':
      state.attractions=action.payload
      break;
      case 'SET_LOCATION':
        state.location=action.payload
        break;
  
    default:
      break;
  }

},initialState)

const middleware = [thunk];


const store = createStore(reduce);
window.store=store
export default store;