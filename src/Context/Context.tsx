'use client'
import { GetUserData } from "@/DataServices/DataServices";
import { IUserInfo } from "@/DataServices/Interfaces/Interfaces";
import { createContext, useContext, useEffect, useState } from "react"
export const Context = createContext<IContextValue>({} as IContextValue);

interface IContextValue {
    user: string,
    setUser: (user: string) => void,
    userInfo: IUserInfo,
    setUserInfo: (user: IUserInfo) => void
    setUserItems: (n: string) => void
    logout: () => void
    resetUserInfo:() => void
}


export const AppWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [user, setUser] = useState<string>("");
    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

    async function getSessionStorage() {

        const item = sessionStorage.getItem("user");

        if(item != "" && item != null){
            setUser(item);
            setUserInfo(await GetUserData(item));
        }

    }

    async function setUserItems(n:string){
        setUser(n);
        setUserInfo(await GetUserData(n));
        sessionStorage.setItem("user", n);
    }

    function logout() {
        sessionStorage.clear();
        setUser("");
        setUserInfo({} as IUserInfo);
    }

    async function resetUserInfo() {
        const d = await GetUserData(user);
        setUserInfo(d);
    }

    useEffect(() => {
        getSessionStorage();
    }, [])

    return (
        <Context.Provider value={{user, setUser, userInfo, setUserInfo, setUserItems, logout, resetUserInfo}}>
            {children}
        </Context.Provider>
    )
    
}

export const useAppContext = () => {
    return useContext(Context);
}