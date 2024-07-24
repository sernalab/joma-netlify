import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import GalleryImage from "../components/GalleryImage";
import ShareButtons from "../components/ShareButtons";

import productsData from "../services/newProducts.json";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <Link
        to={"/news"}
        className="text-blue-500 hover:text-blue-600 font-medium"
      >
        Volver a novedades
      </Link>
      <div className="grid grid-cols-2 gap-12 mt-7">
        <div className="col-span-1">
          <img
            src={product.attributes.imageUrl}
            alt={product.attributes.title}
            className="w-full object-cover h-auto"
          />
        </div>
        <div className="col-span-1">
          <GalleryImage imagesProduct={product.attributes.imageUrl} />
          <h2 className="text-2xl font-bold">{product.attributes.title}</h2>
          <p className="mb-4">{product.attributes.reference}</p>
          <ul className="list-disc list-inside text-gray-800 bg-gray-200 p-3">
            <li>
              Now this is a story all about how, my life got flipped turned
              upside down
            </li>
            <li>And I like to take a minute and sit right here</li>
            <li>
              I'll tell you how I became the prince of a town called Bel-Air
            </li>
          </ul>
          <div>COMPARTIR</div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
