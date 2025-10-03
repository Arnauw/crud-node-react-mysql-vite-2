import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

// const images = Object.values(import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' }));


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
                                        {ai.brand}
                                    </td>
                                    <td className="px-4 py-3">
                                        {ai.model}
                                    </td>

                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-center gap-3">
                                            
                                            <Link
                                                to={`/read/${ai.id}`}
                                                state={{ aiData: ai }}
                                                className="flex items-center justify-center w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors"
                                                title="View Details"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 512 512">
                                                    <rect x="96" y="48" width="320" height="416" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 128h160M176 208h160M176 288h80"/>
                                                </svg>
                                            </Link>
                                            
                                            <Link
                                                to={`/update/${ai.id}`}
                                                state={{ aiData: ai }}
                                                className="flex items-center justify-center w-10 h-10 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                                                title="Edit Item"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 512 512">
                                                    <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                    <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="currentColor"/>
                                                </svg>
                                            </Link>
                                            
                                            <button
                                                onClick={() => handleDelete(ai.id)}
                                                className="flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
                                                title="Delete Item"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 512 512">
                                                    <path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                    <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352"/>
                                                    <path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                </svg>
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
