import Button from "./Button";
import TextField from "./TextField";


export default function AddEditUser({ user, setUser, onSubmit, submitText }) {
    return <form
        className="mt-10 max-w-xl mx-auto"
        onSubmit={e => {
            e.preventDefault()
            onSubmit()
        }}
    >
        <TextField
            label="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            inputProps={{ type: "text", placeholder: "Jhon Doe" }}
        />
        <br />
        <TextField
            label="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
        />
        <Button>{submitText}</Button>
    </form>
}
