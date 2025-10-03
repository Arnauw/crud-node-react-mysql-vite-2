import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const Read = () => {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const {id} = useParams();

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8081/read/${id}`);
                console.log("Fetched data for read:", res.data);
                setBrand(res.data.brand);
                setModel(res.data.model);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        
        // axios.get(`http://localhost:8081/read/${id}`)
        //     .then(res => {
        //         console.log("Fetched data for update:", res.data);
        //         setBrand(res.data.brand);
        //         setModel(res.data.model);
        //     })
        //     .catch(err => console.log(err));
        //
        
    }, [id]);

    return (
        <>
            <div
                className="min-w-screen min-h-screen  bg-slate-900 text-slate-200 flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-slate-800 rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">Item</h1>

                    <div className="text-center my-4 font-bold text-slate-400">
                        <div className="block text-2xl font-medium text-slate-400 mb-2">
                            AI Brand:
                        </div>

                        <div
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg
                            text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 transition">
                            {brand}
                        </div>
                    </div>

                    <div className="text-center my-4 font-bold text-slate-400">
                        <div className="block text-2xl font-medium text-slate-400 mb-2">
                            AI Model:
                        </div>

                        <div
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg
                            text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                            {model}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
