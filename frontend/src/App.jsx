import {Route, Routes} from "react-router-dom";
import {AIcrud} from "./components/AIcrud.jsx";
import {Create} from "./components/aicrud/Create.jsx";
import {Update} from "./components/aicrud/Update.jsx";

export const App = () => {

    return (
        <>
            <div className={"App"}>
                    <Routes>
                        <Route path="/" element={<AIcrud/>}/>
                        <Route path="/create" element={<Create/>}/>
                        <Route path="/update/:id" element={<Update/>}/>
                    </Routes>
            </div>
        </>
    )
}