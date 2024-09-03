import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          todoList: action.payload,
          todoListId: Date.now().toString(),
        },
      ];

    case "DELETE":
      return state.filter((eachItem) => eachItem.todoListId !== action.payload);
    case "EDIT":
      return state.map((eachItem) =>
        eachItem.todoListId === action.payload.id
          ? { ...eachItem, todoList: action.payload.text }
          : eachItem
      );

    default:
      return state;
  }
};
const UseReducer5 = () => {
  const initialState = [
    {
      todoList: "This is First Todo",
      todoListId: "0001",
    },
  ];
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevents adding empty todos
    if (isEditing) {
      // Edit the existing todo item
      dispatch({
        type: "EDIT",
        payload: { id: editId, text: input },
      });
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add a new todo item
      dispatch({
        type: "ADD",
        payload: input,
      });
    }
    setInput(""); // Clear input field after submission
  };
  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const edithandler = (e, id) => {
    e.preventDefault();
    const itemToEdit = todo.find((eachItem) => eachItem.todoListId === id);
    setInput(itemToEdit.todoList);
    setIsEditing(true);
    setEditId(id);
  };
  return (
    <div>
      <h4>UseReducer 5 (Todo semi reducer hook)</h4>

      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br /> <br />
        <div className="col-sm-12">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Todo List</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((eachItem) => (
                <tr key={eachItem.todoListId}>
                  <td>{eachItem.todoListId}</td>
                  <td>{eachItem.todoList}</td>
                  <td>
                    <a
                      href="#"
                      onClick={(e) => edithandler(e, eachItem.todoListId)}
                    >
                      edit
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={(e) => deleteHandler(e, eachItem.todoListId)}
                    >
                      delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UseReducer5;
