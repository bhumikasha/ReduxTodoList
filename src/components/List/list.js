import React from 'react';
import {connect} from 'react-redux';
import {deleteToDo} from '../../actions/index';

const List = (props) => {
    return <ul>
            {props.todo.map((todo, index)=>(
                <li key={index}>
                    {todo.message}
                    <button onClick={()=>props.dispatch(deleteToDo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>
};

const mapStateToProps = (state) => ({
    todo:state.todo.data,
});

export default connect(mapStateToProps)(List);