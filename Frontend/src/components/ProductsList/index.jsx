import ProductCard from "../ProductCard";

function ProductsList({ products }) {
  return (
    <section className="w-[90%] grid grid-cols-fit-10 gap-4 mx-auto">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  )
}

export default ProductsList;
