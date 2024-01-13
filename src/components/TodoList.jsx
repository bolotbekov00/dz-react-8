import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";

export default function TodoList() {
    const { items, loading } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    if (loading) return <h4>Loading...</h4>;

    return (
        <div>
            {items.todos?.map((item) => (
                <div key={item.id} className="todo-box">
                    <input type="checkbox" checked={item.completed} onChange={() => {}}/>
                    <div>{item.todo}</div>
                </div>
            ))
            }
        </div>
    )
}
