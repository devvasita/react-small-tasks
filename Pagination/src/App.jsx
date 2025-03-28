import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const startPages = currentPage * PAGE_SIZE;
  const endPages = startPages + PAGE_SIZE;

  console.log(endPages, "END");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");

    const json = await response.json();

    setProducts(json.products);
  };

  const handleActivePage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return !products.length ? (
    <div className="h-screen w-screen flex justify-center items-center">
      <span className="loading loading-dots h-1/3 "></span>
    </div>
  ) : (
    <div>
      <h1 className="text-center text-4xl font-bold mb-3">Pagination </h1>

      <Pagination
        currentPage={currentPage}
        handleActivePage={handleActivePage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        noOfPages={noOfPages}
        startPages={startPages}
      />

      <div className="flex gap-2 flex-wrap justify-center">
        {products.slice(startPages, endPages).map((item) => (
          <ProductCard item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
