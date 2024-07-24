import { useCustomFetch } from "../../hooks/useCustomFetch";
import SearchBarAdmin from "./SearchBarAdmin";
import SelectBar from "./SelectBar";
import ListAdmin from "./ListAdmin";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Admin() {
    const [products, setProducts] = useState(null);
    const [filterCategoryValue, setFilterCategoryValue] = useState("all");
    const { data: categoriesResult } = useCustomFetch(`${import.meta.env.VITE_BASE_URL}/api/v1/categories`);
    const categories = categoriesResult ? categoriesResult : [];
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = () => {
            axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products`)
                .then(({ data }) => {
                    setProducts(data);
                });
        }
        getProducts();
    }, []);

    const filteredProductList = products ? products.filter(product => {
        if (filterCategoryValue === "all") {
            return product;
        } else {
            return product.category_id._id === filterCategoryValue;
        }
    }) : [];

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/products/${id}`)
            const result = products.filter(product => product._id !== id);
            setProducts(result);
            alert("Product deleted")
        } catch (error) {
            console.log(error)
        }


    }

    const onFilterValueSelected = (filterValue) => {
        setFilterCategoryValue(filterValue)
    }
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login", { replace: true })
    }

    /* const handleNewProduct = () => {
        navigate("/admin/new", { replace: true })
    } */

    return (
        <main className="min-h-[76vh] py-20 px-3 max-w-[900px] mx-auto flex flex-col items-center md:min-h-[81vh]">
            <div className="flex gap-5 flex-col mb-5 sm:flex-row">
                <button className="px-4 py-3 rounded-md bg-mariner-600 text-white">Agregar Producto</button>
                <button onClick={handleLogout} className="px-4 py-3 rounded-md bg-red-400 text-white">Cerrar sesión</button>
            </div>
            <div className="w-full flex flex-wrap gap-1">
                <SelectBar options={categories} filterValueSelected={onFilterValueSelected} />
                <SearchBarAdmin />
            </div>
            <ListAdmin products={filteredProductList} deleteProduct={deleteProduct} />
        </main>

    )
}

export default Admin;
