import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log("Searching for:", event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Products 
        </Typography>
        
       
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 2,
            paddingX: 1,
            width: "200px",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: "100%" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
