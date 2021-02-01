import { act } from "react-dom/test-utils";

const intialState = {
    data: [],
};

const todo = (state = intialState, action) => {
    switch(action.type){
        case 'ADD_TODO': return {
            ...state,
            data: [
                ...state.data,
                {
                    message:action.message,
                    id:action.id,
                },
            ],
        };
        case 'DELETE_TODO': 
        const todo = state.data.filter((todo)=>todo.id !== action.id);
        return {
            ...state,
            data: todo,
        };
        default: return state;
    }
}

export default todo;