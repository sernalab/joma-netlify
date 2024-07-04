import { Link } from "react-router-dom";

function NewProductCard({ newProduct }) {
  return (
    <>
      <div className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <Link to={`/details/${newProduct.attributes.title}`}>
          <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
          <img
            src={newProduct.attributes.imageUrl}
            alt={newProduct.attributes.title}
            className="w-full h-56 object-cover sm:h-72 md:h-96"
          />
        </Link>
        <div className="absolute bottom-0 left-0 p-4">
          <Link to={`/details/${newProduct.attributes.title}`}>
            <h3 className="text-lg font-bold text-white">
              {newProduct.attributes.title}
            </h3>
            <p className="text-sm text-gray-300">
              {newProduct.attributes.reference}
            </p>
          </Link>
          <a
            href="/contact"
            className="inline-block mt-4 bg-blue-600 text-white hover:text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
    </>
  );
}
export default NewProductCard;
