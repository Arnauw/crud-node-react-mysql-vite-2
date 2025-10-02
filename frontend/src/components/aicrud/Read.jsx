import {useEffect, useState} from "react";
import axios from "axios";

export const Read = () => {

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
    
    return (
        <>
            <div className="min-h-screen bg-slate-900 text-slate-200 flex justify-center p-4 m-4">
                
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
                                <tr key={index} className="hover:bg-slate-700/50 transition-colors text-center">
                                    <td className="px-4 py-3 font-medium">{ai.brand}</td>
                                    <td className="px-4 py-3">{ai.model}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-1 px-3 rounded-md text-xs transition-colors">
                                                Edit
                                            </button>
                                            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-md text-xs transition-colors">
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
