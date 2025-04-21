import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
const UseContextUser = () => {

    const name = useContext(UserContext);
  return (
    <div>
      <h2>UseContext UserContext</h2>
      {name.age}
      {name.name}
    </div>
  )
}

export default UseContextUser;
