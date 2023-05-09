import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";
import AddEditUser from "../../components/AddEditUser";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const users = useSelector((store) => store.users);
  const existingUser = users.find((user) => user.id === id);

  if ( ! existingUser )
    return <Navigate to = '/' />

  const { name, email } = existingUser
  const [values, setValues] = useState({ name, email });
  const handleEditUser = () => {
    dispatch(editUser({
      id,
      name: values.name,
      email: values.email,
    }))
    navigate("/");
  };

  return <AddEditUser
    user={values}
    setUser={setValues}
    onSubmit={handleEditUser}
    submitText='Edit'
  />
};

export default EditUser;
