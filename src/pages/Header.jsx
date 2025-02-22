import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import carData from "../pages/CarData";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      const results = carData.filter(
        (car) =>
          car.name.toLowerCase().includes(value) ||
          car.category.toLowerCase().includes(value)
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 0 }}>
          <img
            style={{
              width: "130px",
              filter: "drop-shadow(12px 12px 12px rgb(4, 4, 4))",
            }}
            src="https://www.freepnglogos.com/uploads/zent-logo-png-car-22.png"
            alt="Vintage Sports Car Logo"
          />
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {["Home", "About", "Blog", "Contact"].map((text) => (
            <Link
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              key={text}
              style={{ textDecoration: "none" }}
            >
              <Button color="inherit" sx={{ color: "white" }}>{text}</Button>
            </Link>
          ))}
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              borderBottom: "1px solid white",
              padding: "2px 5px",
              ml: 2,
              height: "30px",
            }}
          >
            <InputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              sx={{ color: "white", fontSize: "14px", width: "120px" }}
            />
            <IconButton sx={{ color: "white", padding: "4px" }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Box>

          {filteredResults.length > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: "35px",
                left: 0,
                width: "200px",
                backgroundColor: "white",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                borderRadius: "4px",
                zIndex: 1000,
              }}
            >
              <List>
                {filteredResults.map((car) => (
                  <ListItem key={car.id}>
                    <Link
                      to={`/details/${car.id}`}
                      style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={car.image}
                        alt={car.name}
                        style={{ width: "50px", height: "30px", marginRight: "10px" }}
                      />
                      <ListItemText primary={car.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {["Home", "About", "Blog", "Contact"].map((text) => (
            <Link
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              key={text}
              style={{ textDecoration: "none", color: "inherit", width: "100%" }}
            >
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
