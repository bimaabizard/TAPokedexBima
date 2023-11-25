import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About'; // Contoh komponen lain
import Navbar from './Components/Navbar'; // Import komponen Navbar
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from './Components/Profile';
import Home from './Components/Home';

import './Components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" Component={Home} exact/>
                    <Route path="home" Component={Main} />
                    <Route path="/about" Component={About} />
                    <Route path="/profile" Component={Profile} />
                    {/* Tambahkan route untuk halaman lain jika diperlukan */}
                </Routes>
            </>
        </Router>
    );
}

export default App;
