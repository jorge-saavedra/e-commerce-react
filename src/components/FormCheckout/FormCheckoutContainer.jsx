import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";
import Swal from 'sweetalert2'
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { useNavigate } from 'react-router-dom'

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate()

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => {
      setOrderId(res.id);
      Swal.fire({
        icon: "success",
        title: "Pedido Creado",
        text: `El ID DEL PEDIDO ES ${res.id}`,
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "NO SE PUDO CREAR EL PEDIDO",
      });
    });
    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: null,
      pago:""
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(15, "El nombre no puede superar los 15 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      telefono: Yup.number().required("Este campo es obligatorio"),
      pago: Yup.string()
        .required("Este campo es obligatorio")
        .min(7, "El metodo de pago debe tener al menos  caracteres")
        .max(15, "El metodo de pago no puede superar los 15 caracteres"), 
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        navigate("/")
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};