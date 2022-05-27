import React from 'react'
import {useRef, useState} from 'react';


export const userContext = React.createContext()

const UserProvider = ({children}) => {
    const [userDict, setUserDict] = useState({phone: '', token: ''})
    return (<userContext.Provider value={{userDict, setUserDict}}>{children}</userContext.Provider>)
}


export default UserProvider