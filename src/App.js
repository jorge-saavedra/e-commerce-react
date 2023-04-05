import { useState } from "react";
import "./App.css";

import CounterContainer from "./components/Counter/CounterContainer";

import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { BsTypeH1 } from "react-icons/bs";
// import Header from "./components/Header";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
// import Products from "./components/Pages/Products";
// import PrivateRoute from "./components/Routing/PrivateRoute";

function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <h1>Compras</h1>
      {/* <CounterContainer /> */}
    </div>
  );
}
// return (
//   <>
//     <Routes>
//       <Route exact path="/" element={<PrivateRoute />}>
//         <Header />
//         <Route exact path="/" element={<Home />} />
//       </Route>
//       <Route exact path="/" element={<PrivateRoute />}>
//         <Header />
//         <Route exact path="/About" element={<About />} />
//       </Route>
//       <Route exact path="/" element={<PrivateRoute />}>
//         <Header />
//         <Route exact path="/Products" element={<Products />} />
//       </Route>
//     </Routes>
//   </>
// );

export default App;
