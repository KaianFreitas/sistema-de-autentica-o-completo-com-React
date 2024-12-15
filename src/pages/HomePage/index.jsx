import React, { useContext} from "react";

import { AuthContext } from "../../context/auth";

import "./styles.css";

const HomePage = () => {
    const {logout} = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="container">
            <h1 className="title">Obrigado pela visita!!</h1>
            <button className="button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;
