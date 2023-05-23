import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import "./FormCheckout.css"
const FormCheckout = ({ handleSubmit, handleChange, errors, values}) => {
  return (
    <div style={{ paddingTop: "50px", backgroundColor:"#3B3B3A",height: "485px"}}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField className="text-estilos"
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth activate
              color="warning"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField className="text-estilos"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              color="warning"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField className="text-estilos"
              id="outlined-basic"
              label="Telefono"
              variant="outlined"
              fullWidth
              color="warning"     
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField className="text-estilos"
              id="outlined-basic"
              label="METODO DE PAGO"
              placeholder="efectivo o tarjeta"
              variant="outlined"
              fullWidth
              color="warning"     
              name="metododepago"
              onChange={handleChange}
              error={errors.metododepago ? true : false}
              helperText={errors.metododepago}
            />
          </Grid>
        
          <Grid item xs={7}>
            <Button type="submit" variant="contained" color="success" sx={{ marginTop: 2}}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;