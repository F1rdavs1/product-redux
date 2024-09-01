import * as React from "react";
import { useSelector } from "react-redux";
import OrderedProducts from "../components/OrderedProducts";

export default function OrderedPage() {
  const orderedPage = useSelector((state) => state.buyList) || [];

  return (
    <div className="flex flex-wrap gap-5 p-10 justify-center">
      {orderedPage.length > 0 ? (
        orderedPage.map((item) => <OrderedProducts key={item.id} item={item} />)
      ) : (
        <p className="text-[40px] font-bold text-[green]">No products yet.</p>
      )}
    </div>
  );
}
