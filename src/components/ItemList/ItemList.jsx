import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "90vh",
        padding: "40px",
        flexWrap: "wrap",
        backgroundColor: "black",
        gap: "25px",
      }}
    >
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
