import { useParams } from "react-router-dom";
import ProductCarrousel from "../../components/ProductCarrousel";
import { useFetch } from "../../hooks/useFetch";

function ProductDetail() {
    const { id } = useParams();
    const { data } = useFetch(`${import.meta.env.VITE_DEV_BASEURL}/api/v1/products/${id}`)
    const product = data ? data : {};
    const slides = product.images ? product.images : [];
    const cartegory = product.category_id ? product.category_id.name : '';
    return (
        <main className="px-5 py-14 min-h-[80vh] md:min-h-[82vh] md:py-5">
            <h2 className="text-2xl text-left">{product.name}</h2>
            <div className="flex flex-col md:flex-row md:justify-evenly">
                <ProductCarrousel autoSlide={false} autoSlideInterval={3000} slides={slides} />
                <div className="flex flex-col md:w-full md:max-w-[500px]">
                    <div className="px-4 py-5 rounded-md bg-gray-200 md:w-full md:max-w-[500px]">
                        <h3 className="text-xl font-light tracking-wide">Categoría:</h3>
                        <span className="text-2xl">{cartegory}</span>
                    </div>
                    <div className="px-4 py-5 rounded-md bg-gray-200 mt-5 md:w-full md:max-w-[500px]">
                        <h3 className="text-xl font-light tracking-wide">Descripción:</h3>
                        <span className="text-2xl">{product.description}</span>
                    </div>
                    <div className="m-5 flex flex-col md:order-first">
                        <span className="tracking-wide text-2xl line-through">${product.price}</span>
                        <span className="tracking-wider text-4xl font-light">${product.price - Math.round(product.price * product.discount / 100)}</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="px-4 py-3 rounded-md bg-green-800 text-white w-full max-w-[400px] mt-5">Comprar </button>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default ProductDetail;
