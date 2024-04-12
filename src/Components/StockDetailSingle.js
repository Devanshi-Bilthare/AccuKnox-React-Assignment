import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

function StockDetailSingle({ open, close, date, prev }) {

  const closeColor = close >= open ? "rgb(78, 245, 78)" : "rgb(247, 83, 83)";
  const openColor = prev <= open ? "rgb(78, 245, 78)" : "rgb(247, 83, 83)";
  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      <TableCell>
        <Button sx={{
             backgroundColor: openColor, color: "black" ,
             '&:hover': { backgroundColor: openColor}
             }}>
          {open}
        </Button>
      </TableCell>
      <TableCell>
        <Button sx={{ 
            backgroundColor: closeColor, color: "black",
            '&:hover': { backgroundColor: closeColor}
            }}>
          {close}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default StockDetailSingle;
