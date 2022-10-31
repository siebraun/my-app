import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import Info from "./Info";
import InventoryItem from "./IventoryItem";
import Bag from "./Bag";
import { List, Modal, Grid } from "@material-ui/core";

export default function Iventory() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState({});
  const [showModal, setModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState([]);

  useEffect(() => {
    fetch("data/items.json")
      .then((result) => result.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const itemsList = items.map((item) => (
    <InventoryItem
      key={item.id}
      item={item}
      addItem={addItem}
      showInfo={showInfo}
    />
  ));

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div id="infoBox">
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.desc}</p>
          <p>Weight: {selectedItem.weight}</p>
        </div>
      </Modal>
      <Grid container>
        <Grid>
          <h2>Items</h2>
          <List>{itemsList}</List>
        </Grid>
        <Grid>
          <h2>Bag</h2>
          <Bag items={selectedInventory} removeItem={removeItem} />
        </Grid>
      </Grid>
    </div>
  );

  function addItem(itemId) {
    setSelectedInventory([...selectedInventory, items[itemId]]);
  }

  function showInfo(itemId) {
    selectItem(items[itemId]);
    setModalOpen(true);
  }

  function removeItem(itemIndex) {
    const tempInventory = [...selectedInventory];
    tempInventory.splice(itemIndex, 1);
    setSelectedInventory(tempInventory);
  }
}
