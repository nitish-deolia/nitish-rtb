import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./App.module.css";
const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (data) => {
    if (data.newItem.trim() === "") return;
    setItems([
      ...items,
      { id: Date.now(), name: data.newItem.trim(), completed: false },
    ]);
    reset({ newItem: "" });
  };

  const { register, handleSubmit, reset } = useForm();
  return (
    <div className={styles.shoppingList}>
      <div className="container mt-4">
        <h2>Shopping List</h2>
        <form onSubmit={handleSubmit(handleAddItem)}>
          <label htmlFor="newItem" className="form-label">
            Add New Item
          </label>
          <input
            {...register("newItem", { required: true })}
            placeholder="Add Items to Shopping List"
            className="form-control"
            autoFocus
          />
          <button type="submit" className="btn btn-primary mt-2">
            Add Item
          </button>
          <button
            type="reset"
            className="btn btn-secondary mt-2 ms-2"
            onClick={() => setItems([])}
          >
            Reset
          </button>
        </form>
        {items.length > 0 ? (
          <ul className="list-group mt-4">
            {items.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                toggleComplete={(id) =>
                  setItems(
                    items.map((item) =>
                      item.id === id
                        ? { ...item, completed: !item.completed }
                        : item
                    )
                  )
                }
                handleDelete={(id) =>
                  setItems(items.filter((item) => item.id !== id))
                }
              />
            ))}
          </ul>
        ) : (
          <p>No items added yet.</p>
        )}
      </div>
    </div>
  );
};

const ShoppingItem = ({ item, toggleComplete, handleDelete }) => {
  return (
    <li
      className="list-group-item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <div
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        className={styles["item-text"]}
        onClick={() => toggleComplete(item.id)}
      >
        {item.name}
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ShoppingList;
