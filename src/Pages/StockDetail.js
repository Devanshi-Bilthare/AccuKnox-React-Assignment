import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  Box,
} from "@mui/material";
import StockDetailSingle from "../Components/StockDetailSingle";

const StockDetail = ({ stockInfo , stockName}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;

  useEffect(()=>{
    setCurrentPage(0)
  },[stockInfo])

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const paginatedStockInfo = stockInfo.slice(startIndex, endIndex);

  return (
    <Box>
      <Typography variant="h3" sx={{ margin: "1%",marginTop:{md:'1%',xs:'10%'}, textAlign: "center" ,fontSize:'4vw'}}>
      {stockName} Stock Details
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Close</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedStockInfo.map((info, index) => (
            <StockDetailSingle
              key={index}
              open={info.open}
              close={info.close}
              date={info.date}
              prev={index > 0 ? paginatedStockInfo[index - 1].close : ""}
            />
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          gap: "10px",
          marginTop:{xs:'10%'}
        }}
      >
        <Button
          onClick={handleClickPrev}
          disabled={currentPage === 0}
          sx={{
            width: "max-content",
            padding: ".5% 1%",
            backgroundColor: "rgb(215, 231, 244)",
            color: "black",
            '&:hover': { backgroundColor: 'rgb(215, 231, 244)'} 
          }}
        >
          Previous
        </Button>
        <Button
          onClick={handleClickNext}
          disabled={endIndex >= stockInfo.length}
          sx={{
            width: "max-content",
            padding: ".5% 1%",
            backgroundColor: "rgb(215, 231, 244)",
            color: "black",
            '&:hover': { backgroundColor: 'rgb(215, 231, 244)' }
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StockDetail;
