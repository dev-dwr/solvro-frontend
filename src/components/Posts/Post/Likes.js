import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Likes({ post }) {
  const favouritesPosts = JSON.parse(localStorage.getItem("posts")) ;
  if (favouritesPosts || favouritesPosts?.length > 0) {

    return favouritesPosts?.find((postEl) => post.id === postEl.id) ? (
      <>
        <FavoriteIcon />
      </>
    ) : (
      <>
         <FavoriteBorderIcon />
      </>
    );
  }
  return <><FavoriteBorderIcon/></>
}

export default Likes;
