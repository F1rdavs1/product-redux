import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_SAVE, SAVED_PRODUCT } from "../redux/types";
import toast, { Toaster } from "react-hot-toast";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const likeList = useSelector((state) => state.likeList);
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
          color="info"
          startIcon={<BookmarkIcon />}
          variant="contained"
        >
          Saved
        </Button>
      </div>
      <Toaster position="top-right" />
    </Card>
  );
}
