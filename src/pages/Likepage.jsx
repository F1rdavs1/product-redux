import * as React from "react";
import { useSelector } from "react-redux";
import LikedProductCart from "../components/LikedProducts";

export default function LikedPage() {
  const likedPage = useSelector((state) => state.likeList) || [];

  return (
    <div className="flex flex-wrap gap-5 p-10 justify-center">
      {likedPage.length > 0 ? (
        likedPage.map((item) => <LikedProductCart key={item.id} item={item} />)
      ) : (
        <p className="text-[40px] font-bold text-[green]">No products yet.</p>
      )}
    </div>
  );
}
