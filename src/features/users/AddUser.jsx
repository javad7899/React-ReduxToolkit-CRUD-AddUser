import AddEditUser from "../../components/AddEditUser";
import useAddEditUser from "../../hooks/useAddEditUser";


const AddUser = () => {
  const { user, setUser, submit } = useAddEditUser ()
  return <AddEditUser
    user={user}
    setUser={setUser}
    onSubmit={submit}
    submitText='Add'
  />
};
export default AddUser;
