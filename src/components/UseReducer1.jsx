import React, { useReducer } from "react";

const initialState = [
  { id: Date.now(), name: "Ranjit", email: "victory@gmail.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  console.log(state);
  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };
  return (
    <>
      <h5>Use Reducer</h5>
      <hr />
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add Contact</button>
      </form>
      <div>
        <ul style={{ padding: "0px" }}>
          {state.map((contact) => (
            <li
              style={{
                margin: "5px 0",
                padding: "5px 0",
                background: "#999",
                listStyleType: "none",
              }}
              key={contact.id}
            >
              <span style={{ marginRight: "50px" }}>{contact.id} </span>
              <span style={{ marginRight: "50px" }}> {contact.name}</span>
              <span style={{ marginRight: "50px" }}>{contact.email}</span>
              <span style={{ float: "right" }}>
                <button
                  onClick={() =>
                    dispatch({ type: "delete", payload: { id: contact.id } })
                  }
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseReducer;
