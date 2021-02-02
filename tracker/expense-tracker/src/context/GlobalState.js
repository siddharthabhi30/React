import React ,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


const intitialState={
    transactions:[
          
        ]
        
}

//createContext

export const GlobalContext=createContext(intitialState);

//provider component
//we are taking everything and wrap this into children
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,intitialState);

    //actions

    function deleteTransactions(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransactions(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (
        //this children part is our whole app
        //provider provides state and actions to components wrapped around
        <GlobalContext.Provider
        value={{
            transactions:state.transactions,
            deleteTransactions,addTransactions
        }}
        >
            {children}
        </GlobalContext.Provider>
    )

}