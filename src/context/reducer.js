import { ADD_TODO, REMOVE_TODO } from "./action.types";


export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return[...state, action.payload]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)    
            // this will remove matching todo from todos
        default:
            return state;    
    }
};

// to generate unique id's for each todo, we'll use "uuid ===> npm i  uuid"
