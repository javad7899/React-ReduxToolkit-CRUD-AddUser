import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';
import AddEditUser from "../../components/AddEditUser";
const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const handleAddUser = () => {
    dispatch(addUser({
      id: uuidv4(),
      name: user.name,
      email: user.email
    }))
    navigate("/");
  };
  return <AddEditUser
    user={user}
    setUser={setUser}
    onSubmit={handleAddUser}
    submitText='Add'
  />
};

export default AddUser;
