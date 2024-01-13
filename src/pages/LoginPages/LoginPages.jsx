import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/authSlice.js";

function LoginPages() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handelSubmit = (e) => {
        e.preventDefault()

        dispatch(loginThunk({name, password}))
        console.log(dispatch(loginThunk))
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" >submit</button>
            </form>
        </div>
    );
}

export default LoginPages;