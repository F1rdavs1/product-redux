import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function OrderedProducts({ item }) {
  const [price, setPrice] = React.useState(item.price);
  const [count, setCount] = React.useState(1);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
    setPrice((prevPrice) => prevPrice + item.price);
  };

  const handleDec = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setPrice((prevPrice) => prevPrice - item.price);
    }
  };

  return (
    <Card
      className="!bg-slate-200 p-2 rounded-lg flex items-center"
      sx={{ width: "100%" }}
    >
      <CardMedia
        className=" bg-white rounded-lg !h-[100px] !w-[100px]"
        component="img"
        image={item.images[0]}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.description}
        </Typography>
        <span className="block mt-[20px] font-medium ">
          Original Price <strong>{item.price.toFixed(2)}$</strong>
        </span>
        <span className="block mt-[20px] font-medium ">
          Total Price <strong>{price.toFixed(2)}$</strong>
        </span>
        <div className="mt-[10px] flex items-center">
          <button
            className="bg-green-500 text-white font-bold text-[20px] py-[2px] px-[5px] rounded-[20%] flex items-center shadow-md"
            onClick={handleInc}
          >
            {" "}
            <AddIcon />{" "}
          </button>
          <span className="mx-4 bg-[#E0E0E0] px-[10px] py-[3px]  rounded-[20%] shadow-md flex items-center">
            {count}
          </span>
          <button
            className="bg-red-500 text-white font-bold text-[20px] py-[2px] px-[5px] rounded-[20%] flex items-center shadow-md"
            onClick={handleDec}
          >
            {" "}
            <RemoveIcon />{" "}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
