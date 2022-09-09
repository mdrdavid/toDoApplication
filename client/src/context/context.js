import { createContext, useReducer } from "react";

import todoReducer, {todoInitialState} from "./reducer";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    const [todosState, toDoDispatch] = useReducer(todoReducer, todoInitialState)

    return (
        <GlobalContext.Provider  value={{todosState, toDoDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
