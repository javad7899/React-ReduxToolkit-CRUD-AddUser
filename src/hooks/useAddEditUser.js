import {useState} from 'react'
import { addUser, editUser } from "../features/users/userSlice";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


export default function useAddEditUser(id) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const users = useSelector((store) => store.users);

    const [user, setUser] = useState(() => {
        if (!id) return { id: uuidv4 (), name: '', email: '' }
        const existingUser = users.find((user) => user.id === id)
        if (!existingUser)
            throw new Error("Invalid user!")
        return existingUser
    })

    const action = id ? editUser : addUser
    function submit() {
        dispatch(action( user ))
        navigate("/");
    }

    return { user, setUser, submit }
}
