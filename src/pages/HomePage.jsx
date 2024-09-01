import { useEffect } from "react";
import "../App.css";
import ProductCard from "../components/AllProductCard";
import { useAxios } from "../hook/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_PODUCTS } from "../redux/types";

function HomePage() {
  const getProducts = useSelector((state) => state.getProduct);
  const savedList = useSelector((state) => state.savedProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    useAxios()
      .get("/products")
      .then((res) => {
        dispatch({ type: GET_ALL_PODUCTS, payload: res.data.products });
      });
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-5 p-10 justify-center">
        {getProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
