import axios from "axios";
import { useEffect, useReducer } from "react"
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import { contextContainer } from "./contextContainer";
const initialState = {
    posts: [],
    loading: false,
    errMsg: ''
}

const reducer = (currState, { type, payload, error }) => {
    switch (type) {
        case 'LOADING_DATA': return { ...currState, loading: true };
        case 'IDLE_DATA': return { ...currState, posts: payload, loading: false };
        case 'REJECT_DATA': return { ...currState, errMsg: error, loading: false };
        default: return currState;
    }
}
const AppContextEx2 = () => {
    const [st, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getPosts = async () => {
            try {
                dispatch({ type: 'LOADING_DATA' });
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
                dispatch({ type: 'IDLE_DATA', payload: data });
            } catch (error) {
                dispatch({ type: 'REJECTED_DATA', error: error?.message });
            }
        }
        getPosts();
    }, []);
    return (
        <div>
            <contextContainer.Provider value={st}>
                <ChildA />
                <ChildB />
            </contextContainer.Provider>
        </div>
    )
}

export default AppContextEx2