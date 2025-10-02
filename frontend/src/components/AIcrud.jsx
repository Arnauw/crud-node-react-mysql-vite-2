import {Read} from "./aicrud/Read.jsx";

export const AIcrud = () => {
    return (
        <>
            <div className={"min-h-screen min-w-screen bg-gray-900 flex flex-col items-center p-4"}>
                <h1 className={"text-4xl font-bold text-gray-200 mb-8"}>AI CRUD Application</h1>
                <div className={"w-full max-w-4xl rounded-lg shadow-lg"}>
                    <div className={"flex justify-center"}>
                        <a
                            className={"bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"}
                            href={"/create"}>
                            Add
                        </a>
                    </div>
                    <div className={"read-container rounded-lg overflow-hidden"}>
                        <Read></Read>
                    </div>
                </div>
            </div>
        </>
    )
}
