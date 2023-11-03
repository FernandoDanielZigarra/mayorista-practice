import ProductCard from "../ProductCard";
function ProductsList({ products }) {

  return (
    <section className="flex place-content-center flex-wrap gap-3 p-1">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  )
}

export default ProductsList;
