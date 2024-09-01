import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { BUY_SAVE, LIKE_SAVE, SAVED_PRODUCT } from "../redux/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import toast, { Toaster } from "react-hot-toast";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const likeList = useSelector((state) => state.likeList);
  const buyList = useSelector((state) => state.buyList);
  const savedList = useSelector((state) => state.savedProduct);

  const handleLike = () => {
    const isLiked = likeList.some((likedItem) => likedItem.id === item.id);

    if (isLiked) {
      toast.error("This product is already liked");
    } else {
      dispatch({ type: LIKE_SAVE, payload: item });
      toast.success(`${item.title} liked`);
    }
  };

  const handleBuy = () => {
    const isBuy = buyList.some((buyItem) => buyItem.id === item.id);

    if (isBuy) {
      toast.error("This product is already saved");
    } else {
      dispatch({ type: BUY_SAVE, payload: item });
      toast.success(`${item.title} saved`);
    }
  };

  const handleSave = () => {
    const isSaved = savedList.some((savedItem) => savedItem.id === item.id);

    if (isSaved) {
      toast.error("This product is already saved");
    } else {
      dispatch({ type: SAVED_PRODUCT, payload: item });
      toast.success(`${item.title} saved`);
    }
  };

  return (
    <Card
      className="!bg-slate-200 p-2 rounded-lg cursor-pointer"
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        className="bg-white rounded-lg h-[340px]"
        component="img"
        height="140"
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
      <div className="text-center space-x-2">
        <Button
          onClick={handleLike}
          color="error"
          startIcon={<FavoriteIcon />}
          variant="contained"
        >
          Like
        </Button>
        <Button
          onClick={handleSave}
          color="warning"
          startIcon={<BookmarkIcon />}
          variant="contained"
        >
          Saved
        </Button>
        <Button
          onClick={handleBuy}
          color="info"
          startIcon={<ShoppingCartIcon />}
          variant="contained"
        >
          Buy
        </Button>
      </div>
      <Toaster position="top-right" />
    </Card>
  );
}
