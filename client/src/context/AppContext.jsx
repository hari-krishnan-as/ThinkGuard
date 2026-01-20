import { createContext, useEffect } from "react";

const AppContext = createContext()



export const AppContextProvider = ({children}) =>{


    const navigate = useNavigate()
    const [user,setUser] = useState(null);
    const [chats,setChats] = useState([]);
    const [selectedChats,setSelectedChats] = useState(null);
    const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');

    const fetchUser = async () =>{
        setUser(dummyUserData)
    }

    useEffect(() =>{
        fetchUser()
    },[])

    const value={}
    return(
         <AppContext.Provider value={value}>
            {children}
         </AppContext.Provider>
    )

}
export const useAppContext =()=> useContext(AppContext)