import { Link } from "react-router-dom";
import PopularProductData from "../../data/PopularProductData";

const Products = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="container text-center">
        <h2 className="inline-block text-xl md:text-3xl font-semibold text-white bg-primary py-2 px-6 rounded-tl-2xl rounded-br-2xl mb-10 capitalize">Our Products Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PopularProductData.map((item) => (
            <Link to={`/viewpopularproduct/${item.category}`}>
              <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div
                  className="relative flex justify-center items-center h-64 
                             bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                             group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                             transition-all duration-700 ease-in-out"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Products;
