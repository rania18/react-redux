import React from "react";
import { useDispatch } from "react-redux";
import { delatetodo, updateTodo, donetodo } from "../redux/Action";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Todoitem = ({ todo }) => {
  const [editable, setEditable] = useState();
  const [name, setName] = useState(todo.name);

  let dispatch = useDispatch();
  return (
    <div className="row mx-2 align-items-center">
      <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>

      <div className="col">
        {editable ? (
          <input
            type="text"
            className="from-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h4 style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.name}
          </h4>
        )}
      </div>
      <button
        onClick={() => {
          if (editable) {
          dispatch(
            updateTodo({
              ...todo,
              name: name,
            })
          );
            setName(todo.name);
            setEditable(!editable);
          }else{
            
            setEditable(!editable);
          }

        }}
        className="btn btn-primary m-2"
      >
        {" "}
        {editable ? "upadate" : "edit"}
      </button>
      

      <Button
        onClick={() => dispatch(delatetodo(todo.id))}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <button
        className="btn btn-dark m-2"
        onClick={() => dispatch(donetodo(todo.id))}
      >
        {todo.done ? "done" : "undone"}
      </button>
    </div>
  );
};

export default Todoitem;
