import React from "react";
import styles from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className={styles.containerIDetail}>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={product.img} alt="" />
        </div>

        <div className={styles.containerDetail}>
          <h2 style={{ fontFamily: "inter" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span> {product.title}
          </h2>
          <h2 style={{ fontFamily: "inter" }}>
            <span style={{ fontSize: "23px" }}>Descripcion: </span>{" "}
            {product.description}
          </h2>
          <h2 style={{ fontFamily: "inter" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}.-
          </h2>
        </div>
      </div>
      {product.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={product.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}
    </div>
  );
};
