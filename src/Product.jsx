export function Product({ title, price = "Consulte" }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-3 max-w-xs border border-gray-100">
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            <p className="text-2xl font-semibold text-emerald-600">{price}</p>
            <button className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 rounded-xl transition-colors duration-200 cursor-pointer">
                Adicionar ao carrinho
            </button>
        </div>
    )
}