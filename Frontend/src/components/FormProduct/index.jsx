function FormProduct() {
    return (
        <main className="w-full min-h-[60vh] bg-gray-100 pt-16 flex justify-center items-center px-5">
            <form className="w-full flex flex-wrap flex-col justify-between gap-5 bg-white p-3 border rounded-lg">
                <h2 className="text-center font-semibold underline">Agregar Producto</h2>
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="w-full border-2 border-mariner-300" />
                </div>
                <div className="w-full">
                    <label htmlFor="">Descripción</label>
                    <input type="text" />
                </div>
                <div className="w-full">
                    <label htmlFor="">Precio</label>
                    <input type="text" />
                </div>
            </form>
        </main>
    )
}

export default FormProduct;
