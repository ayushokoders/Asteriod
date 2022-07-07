
import { useState } from 'react';
import Home from './Components/Home';


function App() {
    const [loading,setLoading] = useState<boolean>(true)
    return(
        <>
            <Home loading={loading} setLoading={setLoading} />
        </>
    )
}

export default App