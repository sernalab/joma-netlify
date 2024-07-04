import { useState, useEffect } from "react";
import productsData from "../services/newProducts.json";
import NewProductCard from "../components/NewProductCard";

function NewsPage() {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    setNewProduct(productsData);
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">
            Nuestras novedades:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
            {newProduct.map((product) => (
              <NewProductCard key={product.id} newProduct={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsPage;
