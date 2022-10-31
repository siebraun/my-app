import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import { Button, ListItem } from "@material-ui/core";

export default function InventoryItem(props) {
  return (
    <ListItem>
      {props.item.name}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.addItem(props.item.id);
        }}
      >
        Add
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.showInfo(props.item.id);
        }}
      >
        Info
      </Button>
    </ListItem>
  );
}
