import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export const Create = () => {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const navigate = useNavigate();

    const handleSubmitCreate = async (e) => {
        e.preventDefault();
        console.log({brand, model});
        try {
            const res = await axios.post("http://localhost:8081/create", {
                brand,
                model
            });
            console.log(res.data);
            navigate('/');
        } catch (err) {
            console.error("Error creating item:", err);
        }
    }

    return (
        <>
            <div
                className="min-w-screen min-h-screen  bg-slate-900 text-slate-200 flex items-center justify-center p-4">

                <div className="w-full max-w-lg bg-slate-800 rounded-xl shadow-lg p-8">

                    <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">Create New Item</h1>

                    <form
                        onSubmit={handleSubmitCreate}
                        action=""
                        className="flex flex-col gap-6">

                        <div>
                            <label htmlFor="ai-brand" className="block text-sm font-medium text-slate-400 mb-2">
                                Enter AI brand
                            </label>
                            <input
                                onChange={
                                    (e) => setBrand(e.target.value)
                                }
                                type="text"
                                id="ai-brand"
                                placeholder="exemple: OpenAI"
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="ai-model" className="block text-sm font-medium text-slate-400 mb-2">
                                Enter AI model
                            </label>
                            <input
                                onChange={
                                    (e) => setModel(e.target.value)
                                }
                                type="text"
                                id="ai-model"
                                placeholder="GPT-4o"
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                Create
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
