/* import { useEffect, useState } from "react"; */
import { useParams } from "react-router-dom";
/* import { useNavigate } from "react-router-dom"; */
import { useFetch } from "../../hooks/useFetch";

function ProductDetail() {
    const { id } = useParams();
    const { data } = useFetch(`http://localhost:3000/api/v1/products/${id}`)
    const product = data ? data : {}

    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export default ProductDetail;
