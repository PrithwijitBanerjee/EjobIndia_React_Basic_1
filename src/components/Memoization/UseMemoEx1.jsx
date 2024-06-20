// useMemo hooks returns a memoized value ...
// useMemo hooks accepts second parameter to declare dependencies...
// the functions will only run when its dependencies have changed ...
// useMemo hooks is mainly used in performance optimization in react ...

import { useMemo, useState } from 'react'

const UseMemoEx1 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    // const expensiveRes = expensiveCalculation(count);

    const expensiveRes = useMemo(() => expensiveCalculation(count), [count]);
    const addTodo = () => {
        setTodos(prevTodo => [...prevTodo, 'Todo Added']);
    }
    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <div>
                <h1>My Todos List ...</h1>
                {
                    todos.length !== 0 && todos?.map((todo, index) => {
                        return (<p key={index}>
                            {todo}
                        </p>)
                    })
                }
                <button onClick={addTodo}>Add Todo Item</button>
            </div>
            <div className='mt-5'>
                <h2>Count: {count}</h2>
                <button onClick={incrementCount}>Increment Count</button>
            </div>
            <div className='mt-5'>
                <h1>Expensive calculation Res: {expensiveRes}</h1>
            </div>
        </div>
    );

}

const expensiveCalculation = num => {
    console.log('performing expensive calculation ...');
    for (let i = 0; i < 100; i++) {
        num++;
    }
    return num;
}
export default UseMemoEx1