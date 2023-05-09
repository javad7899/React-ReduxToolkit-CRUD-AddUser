import { useParams } from "react-router-dom";
import AddEditUser from "../../components/AddEditUser";
import useAddEditUser from "../../hooks/useAddEditUser";


const EditUser = () => {
  const { id } = useParams();
  const { user, setUser, submit } = useAddEditUser ( id )
  return <AddEditUser
    user={user}
    setUser={setUser}
    onSubmit={submit}
    submitText='Edit'
  />
};
export default EditUser;
