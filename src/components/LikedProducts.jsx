import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { BUY_SAVE, SAVED_PRODUCT } from "../redux/types";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function LikedProducts({ item }) {
  const dispatch = useDispatch();

  return (
    <Card className="!bg-slate-200 p-2 rounded-lg" sx={{ maxWidth: 345 }}>
      <CardMedia
        className="bg-white rounded-lg h-[240px]"
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
          Price <strong>{item.price}$</strong>
        </span>
      </CardContent>
      <div className="flex justify-center space-x-3">
        <Button
          onClick={() => dispatch({ type: SAVED_PRODUCT, payload: item })}
          startIcon={<BookmarkIcon />}
          color="warning"
          variant="contained"
        >
          save
        </Button>
        <Button
          onClick={() => dispatch({ type: BUY_SAVE, payload: item })}
          startIcon={<ShoppingCartIcon />}
          color="info"
          variant="contained"
        >
          Buy
        </Button>
      </div>
    </Card>
  );
}
