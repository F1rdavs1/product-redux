import * as React from "react";
import { useSelector } from "react-redux";
import SavedProducts from "../components/SavedProducts";

export default function SavedPage() {
  const SavedPage = useSelector((state) => state.savedProduct) || [];

  return (
    <div className="flex flex-wrap gap-5 p-10 justify-center">
      {SavedPage.length > 0 ? (
        SavedPage.map((item) => <SavedProducts key={item.id} item={item} />)
      ) : (
        <p className="text-[40px] font-bold text-[green]">No products yet.</p>
      )}
    </div>
  );
}
