import { createContext } from "react";

 
interface AppContextType {
    tema: string | null;
}
 
const AppContext = createContext<AppContextType>({
    tema: null,
});
 
export function AppProvider(props: any) {

  
    return (
        <AppContext.Provider value={{
            tema: 'dark'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
 
export default AppContext