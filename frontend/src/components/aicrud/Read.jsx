export const Read = () => {
    return (
        <>
            <div
                className="min-w-screen min-h-screen  bg-slate-900 text-slate-200 flex items-center justify-center p-4">

                <div className="w-full max-w-lg bg-slate-800 rounded-xl shadow-lg p-8">

                    <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">Item</h1>

                    <div className="text-center my-4 font-bold text-slate-400">
                        <div className="block text-sm font-medium text-slate-400 mb-2">
                            AI Brand:
                        </div>

                        <div
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg
                            text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 transition">
                            TEST BRAND
                        </div>
                    </div>

                    <div className="text-center my-4 font-bold text-slate-400">
                        <div className="block text-sm font-medium text-slate-400 mb-2">
                            AI Model:
                        </div>

                        <div
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg
                            text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                        TEST MODEL
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
