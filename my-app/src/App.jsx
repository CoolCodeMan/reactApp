import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div className="topBar">
        <h2>💻🦍 My Github Page ☀️</h2>

                <ul className="topBarLink">

                <li><a href="#/Infopage">❓ Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                <li><a href="#/Projects">👷 Projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                <li> <a href="#/Texts">📖 Texts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                <li><a href="#/Updates">🛠️ Updates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                </ul>
        </div>


        <div className="outletContent">
            <Outlet />
        </div>

        </>
    );
};