import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const Index = () => {

    const [ais, setAis] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8081/");
                setAis(res.data);
                console.log(res.data);
            } catch (err) {
                console.err("Error fetching data:", err);
            }
        }
        fetchData();
    }, [])

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        if (isConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:8081/delete/${id}`);
                console.log("Deleting item:", res.data);
                window.location.reload();
            } catch (err) {
                console.log("Error deleting item:", err);
            }
        }
    }

    return (
        <>
            <div className="h-fit bg-slate-900 text-slate-200 flex justify-center p-4 m-4">

                <div className="w-full max-w-4xl h-fit bg-slate-800 rounded-xl shadow-lg py-6">

                    <h1 className="text-2xl font-bold text-center mb-6">AIs</h1>

                    <div className="overflow-x-auto rounded-lg">
                        <table className="w-full text-left text-sm">

                            <thead className="bg-slate-700 text-slate-300 uppercase tracking-wider">
                            <tr className={"text-center"}>
                                <th className="px-4 py-3 font-semibold">Brand</th>
                                <th className="px-4 py-3 font-semibold">Model</th>
                                <th className="px-4 py-3 font-semibold">Actions</th>
                            </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-700">
                            {ais.map((ai, index) => (
                                <tr key={index}
                                    className="odd:bg-slate-800/50 even:bg-slate-700/50 hover:bg-slate-900/50 transition-colors text-center">
                                    <td className="px-4 py-3 font-medium">
                                        <Link
                                            to={`/read/${ai.id}`}
                                            state={{aiData: ai}}
                                        >
                                            {ai.brand}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3">
                                        {/*<Link*/}
                                        {/*    to={`/read/${ai.id}`}*/}
                                        {/*    state={{aiData: ai}}*/}
                                        {/*>*/}
                                            {ai.model}
                                        {/*</Link>*/}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <Link
                                                to={`/update/${ai.id}`}
                                                state={{aiData: ai}}
                                                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-1 px-3 rounded-md text-xs transition-colors">
                                                Edit
                                            </Link>
                                            <button
                                                className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-md text-xs transition-colors"
                                                onClick={() => handleDelete(ai.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
