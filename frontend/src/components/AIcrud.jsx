import {Index} from "./aicrud/Index.jsx";
import {Link} from "react-router-dom";

export const AIcrud = () => {
    return (
        <>
            <div className={"w-[100vw] min-h-screen min-w-screen bg-gray-900 flex flex-col items-center p-4"}>
                <h1 className={"text-4xl font-bold text-gray-200 mb-8"}>AI CRUD Application</h1>
                <div className={"w-full max-w-4xl rounded-lg shadow-lg"}>
                    <div className={"flex justify-center"}>
                        <Link
                            className={"bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"}
                            to={"/create"}>
                            Add
                        </Link>
                    </div>
                    <div className={"read-container rounded-lg overflow-hidden"}>
                        <Index></Index>
                    </div>
                </div>
            </div>
        </>
    )
}
