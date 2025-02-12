import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div className="topBar">
        <h2>💻🦍 My Github Page ☀️</h2>


                <a href="#/Infopage">❓ Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                <a href="#/Projects">👷 Projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                 <a href="#/Texts">📖 Texts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                <a href="#/Updates">🛠️ Updates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                
        </div>


        <div className="outletContent">
            <Outlet />
        </div>

        </>
    );
};