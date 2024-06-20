import { createContext } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export const contextContainer = createContext(); // creating a context container using context API ...
export const secondContextContainer = createContext(); // creating another context container using context API ...
const AppContextRoutes = () => {
    const fruits = ['Apple', 'Mango', 'Banana', 'Pine-Apple'];
    const student = {
        name: 'John Doe',
        age: 27
    }
    const Provider = contextContainer.Provider;
    return (
        <div>
            <Provider value={fruits}>
                <secondContextContainer.Provider value={student}>
                    <ChildA />
                    <ChildB />
                </secondContextContainer.Provider>
            </Provider>
        </div>
    )
}

export default AppContextRoutes