import React, { useReducer } from "react";

const initialState = {
  todoList: [
    {
      todoList: "This is First Todo",
      todoListId: "0001",
    },
  ],
  input: "",
  isEditing: false,
  editId: null,
  error: "",
};

const reducer = (state, action) => {
    switch (action.type) {
      case "SET_INPUT":
        return { ...state, input: action.payload, error: "" };
  
      case "ADD":
        if (!state.input.trim()) {
          return { ...state, error: "Todo cannot be empty." };
        }
        return {
          ...state,
          todoList: [
            ...state.todoList,
            { todoList: state.input, todoListId: Date.now().toString() },
          ],
          input: "",
          error: "Todo Added", // Message displayed when a todo is successfully added
        };
  
      case "DELETE":
        if (!state.todoList.find((item) => item.todoListId === action.payload)) {
          return { ...state, error: "Item not found for deletion." };
        }
        return {
          ...state,
          todoList: state.todoList.filter(
            (eachItem) => eachItem.todoListId !== action.payload
          ),
          error: "Todo Deleted", // Message displayed when a todo is successfully deleted
        };
  
      case "EDIT":
        const itemToEdit = state.todoList.find(
          (eachItem) => eachItem.todoListId === action.payload
        );
        if (!itemToEdit) {
          return { ...state, error: "Item not found for editing." };
        }
        return {
          ...state,
          input: itemToEdit.todoList,
          isEditing: true,
          editId: action.payload,
          error: "", // Resetting error when entering edit mode
        };
  
      case "UPDATE":
        if (!state.input.trim()) {
          return { ...state, error: "Todo cannot be empty." };
        }
        if (!state.todoList.find((item) => item.todoListId === state.editId)) {
          return { ...state, error: "Item not found for update." };
        }
        return {
          ...state,
          todoList: state.todoList.map((eachItem) =>
            eachItem.todoListId === state.editId
              ? { ...eachItem, todoList: state.input }
              : eachItem
          ),
          input: "",
          isEditing: false,
          editId: null,
          error: "Todo Updated", // Message displayed when a todo is successfully updated
        };
  
      default:
        return state;
    }
  };
  

const UseReducer6 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (state.isEditing) {
      dispatch({ type: "UPDATE" });
    } else {
      dispatch({ type: "ADD" });
    }
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch({ type: "DELETE", payload: id });
  };

  const editHandler = (e, id) => {
    e.preventDefault();
    dispatch({ type: "EDIT", payload: id });
  };

  const inputChangeHandler = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  return (
    <div>
      <h4>UseReducer 6 (Fully Reducer Hook)</h4>
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="input"
              value={state.input}
              onChange={inputChangeHandler}
            />
            <button type="submit">
              {state.isEditing ? "Update" : "Submit"}
            </button>
          </form>
          {state.error && (
            <p style={{ color: "red" }}>{state.error}</p>
          )}
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
              {state.todoList.map((eachItem) => (
                <tr key={eachItem.todoListId}>
                  <td>{eachItem.todoListId}</td>
                  <td>{eachItem.todoList}</td>
                  <td>
                    <a href="#" onClick={(e) => editHandler(e, eachItem.todoListId)}>
                      edit
                    </a>
                  </td>
                  <td>
                    <a href="#" onClick={(e) => deleteHandler(e, eachItem.todoListId)}>
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

export default UseReducer6;
