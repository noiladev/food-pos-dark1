import { createContext, useState } from "react";

const Context = createContext() ;

function Provider({children}) {
    const [notification, setNotification] = useState()
    return <Context.Provider value={notification, setNotification}>
        {children}
    </Context.Provider>
}

export {Context, Provider}

// index.js   
{/* <Provider>
<App />
</Provider> */}


//kereli page ga 
// const {notification, setNotification} = useContext(Context)