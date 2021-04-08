import {createContext, useContext} from 'react'


const UserAge =  createContext()


const UserAgeProvider = ({children}) => {

    const user1 = '30';
    const user2 = '40';
    return (
        <UserAge.Provider value={{user1, user2}}>
            {children}
        </UserAge.Provider>
    )
}



const useUserAge = ()=> useContext(UserAge)

export {useUserAge, UserAgeProvider}