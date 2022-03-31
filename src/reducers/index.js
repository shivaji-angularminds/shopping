import { combineReducers } from "redux";
import toDoArray from "./getToDoReducer"
import active from "./findActive"
import deleteToDo  from "./deleteToDo";
const allReducer=combineReducers({
    toDoArray:toDoArray,
    active:active,
    deleteToDo:deleteToDo

})

export default allReducer