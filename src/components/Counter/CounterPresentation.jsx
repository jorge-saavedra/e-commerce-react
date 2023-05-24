import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const CounterPresentation = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "30px",
          padding: "10px",
        }}
      >
        <Button
          variant="contained"
          style={{ marginLeft: "100px" }}
          onClick={sumar}
        >
          Agregar
        </Button>
        <h2>{counter}</h2>
        <Button variant="contained" onClick={restar}>
          Restar
        </Button>
      </div>
      <div style={{ display: "flex", gap: "30px", paddingBottom: "25px" }}>
        <Link to="/">
          <Button variant="contained" style={{ marginLeft: "50px" }}>
            Regresar
          </Button>
        </Link>
        <Button variant="contained" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default CounterPresentation;
