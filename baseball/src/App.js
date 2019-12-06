import React, {useState} from 'react';
import './App.css';

import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

function App () {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);


    return (
        <div className="App">
            <Display
                balls={balls}
                strikes={strikes}
            />
            <Dashboard
                balls={balls}
                strikes={strikes}
                setBalls={setBalls}
                setStrikes={setStrikes}
            />
        </div>
    );
}

export default App;
