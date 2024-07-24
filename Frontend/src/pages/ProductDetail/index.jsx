import { useParams } from "react-router-dom";
import ProductCarrousel from "../../components/ProductCarrousel";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import Spinner from "../../components/Spinner";
import BtnBuy from "../../components/BtnBuy";

function ProductDetail() {
    const { id } = useParams();
    const { data, isPending } = useCustomFetch(`${import.meta.env.VITE_BASE_URL}/api/v1/products/${id}`)
    const product = data ? data : {};
    const slides = product.images ? product.images : [];
    const cartegory = product.category_id ? product.category_id.name : '';
    return (
        <main className="px-5 py-14 min-h-[80vh] md:min-h-[82vh] md:py-5">
            {isPending && <Spinner />}
            {!isPending && (<><h2 className="text-2xl text-left">{product.name}</h2>
                <div className="flex flex-col md:flex-row md:justify-evenly">
                    <ProductCarrousel autoSlide={false} autoSlideInterval={3000} slides={slides} />
                    <div className="flex flex-col gap-5 md:w-full md:max-w-[500px]">
                        <div className="px-4 py-5 rounded-md bg-gray-200 md:w-full md:max-w-[500px]">
                            <h3 className="text-xl font-light tracking-wide">Categoría:</h3>
                            <span className="text-2xl">{cartegory}</span>
                        </div>
                        <div className="px-4 py-5 rounded-md bg-gray-200 md:w-full md:max-w-[500px]">
                            <h3 className="text-xl font-light tracking-wide">Descripción:</h3>
                            <span className="text-2xl">{product.description}</span>
                        </div>
                        <div className="flex flex-col md:order-first">
                            <span className="text-xl">Precio anterior: <strong>${product.price}</strong></span>
                            <span className="text-2xl">Descuento: <strong className="text-green-500">{product.discount}%</strong></span>
                            <span className="text-2xl">Precio actual: <strong className="text-green-500">${product.price - Math.round(product.price * product.discount / 100)}</strong></span>
                            <span className="tracking-wide text-2xl line-through"></span>
                            <span className="tracking-wider text-4xl font-light"></span>
                        </div>
                        <div className="w-full">
                            <BtnBuy />
                        </div>
                    </div>
                </div>
            </>)}
        </main>
    );
}

export default ProductDetail;
