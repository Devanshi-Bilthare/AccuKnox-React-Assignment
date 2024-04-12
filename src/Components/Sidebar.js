import React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Sidebar({ stocks, setSelectedStock }) {
  const handleChange = (e, value) => {
    setSelectedStock(value);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "30%" },
        height: { xs: "20vh", md: "100vh" },
        borderRight: {md:"2px solid black",xs:'0px'},
        borderBottom:{md:"0px", xs:'2px solid black'},
        padding: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{ margin: {md:"2%",xs:"3%"}, marginBottom: "5%", fontSize: {md:"3vw",xs:"5vw"} }}
      >
        Stocks
      </Typography>
      <Autocomplete
        disablePortal
        onChange={handleChange}
        options={stocks.map((stock) => stock.stockName)}
        renderInput={(params) => <TextField {...params} label="Select Stock" />}
        // fullWidth
        clearIcon={null}
        sx={{
          "& .MuiAutocomplete-endAdornment": {
            right: 10,
            width: "10%",
          },
        }}
      />
    </Box>
  );
}

export default Sidebar;
