import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const ItemCard = ({ item }) => {
  return (
    <div>
      <Card sx={{ width: 355, height: 400 }}>
        <CardMedia sx={{ height: 150 }} image={item.img} title="green iguana" />
        <CardContent style={{ textAlign: "center", fontFamily: "inter" }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="blue">
            Precio:
            {item.price}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            height: 50,
            justifyContent: "space-around",
          }}
        >
          <Link to={`/itemDetail/${item.id}`}>
            <Button variant="contained" size="small">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
