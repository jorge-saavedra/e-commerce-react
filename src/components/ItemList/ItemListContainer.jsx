import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (name) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", name)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => err);
  }, [name]);

  return (
    <div>
      {items.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30vh",
          }}
        >
          <PacmanLoader color="blue" speedMultiplier={1.5} />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
