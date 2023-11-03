import { useCustomFetch } from "../../hooks/useCustomFetch";
import SearchBarAdmin from "./SearchBarAdmin";
import SelectBar from "./SelectBar";
import ListAdmin from "./ListAdmin";
import { useEffect, useState } from "react";
import axios from "axios";


function Admin() {
    const [products, setProducts] = useState(null);
    const [filterCategoryValue, setFilterCategoryValue] = useState("all");
    const { data: categoriesResult } = useCustomFetch(`${import.meta.env.VITE_BASE_URL}/api/v1/categories`);
    const categories = categoriesResult ? categoriesResult : [];

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

    return (
        <main className="min-h-[75vh] py-20 px-5 max-w-[900px] mx-auto">
            <div className="full flex flex-wrap gap-1">
                <SelectBar options={categories} filterValueSelected={onFilterValueSelected} />
                <SearchBarAdmin />
            </div>
            <ListAdmin products={filteredProductList} deleteProduct={deleteProduct} />
        </main>
    )
}

export default Admin;
