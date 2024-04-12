import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import StockDetail from "./StockDetail";
import Container from "@mui/material/Container";

function Home({ data }) {
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedStockInfo, setSelectedStockInfo] = useState([]);

  const handleStockChange = (stockName) => {
    const selectedStockData = data.find(
      (stock) => stock.stockName === stockName
    );
    setSelectedStockInfo(selectedStockData ? selectedStockData.info : "");
    setSelectedStock(stockName);
  };
  return (
    <Container
      maxWidth={false}
      sx={{ padding: 0, display: {md:"flex", xs:'block'}, overflow: "hidden" }}
    >
      <Sidebar stocks={data} setSelectedStock={handleStockChange} />
      <StockDetail stockInfo={selectedStockInfo} stockName={selectedStock} />
    </Container>
  );
}

export default Home;
