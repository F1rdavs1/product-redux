import * as React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function SavedProducts() {
  const savedProducts = useSelector((state) => state.savedProduct) || [];

  return (
    <div className="flex flex-wrap gap-5 p-10 justify-center">
      {savedProducts.length > 0 ? (
        savedProducts.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <p className="text-[40px] font-bold text-[green]">No products yet.</p>
      )}
    </div>
  );
}
