import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GalleryImage from "../components/GalleryImage";
import productsData from "../services/newProducts.json"; // Asegúrate de importar tus datos JSON

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id.toString() === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const { attributes } = product;
  const { title, reference, gallery, thumbnail } = attributes;

  return (
    <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <Link
        to="/news"
        className="text-blue-500 hover:text-blue-600 font-medium"
      >
        Volver a novedades
      </Link>
      <div className="grid grid-cols-2 gap-12 mt-7">
        <div className="col-span-1">
          <GalleryImage gallery={gallery} />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mb-4">Referencia: {reference}</p>
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
