import * as React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function LikedProducts() {
  const likedProducts = useSelector((state) => state.likeList) || [];

  return (
    <div className="flex flex-wrap gap-5 p-10 justify-center">
      {likedProducts.length > 0 ? (
        likedProducts.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <p className="text-[40px] font-bold text-[green]">No products yet.</p>
      )}
    </div>
  );
}
