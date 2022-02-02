// General
import React, { useState, useEffect } from "react";

// Assets
import logo from "../../icons/logo.svg";

// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";

// Components
import Filter from "../filter/Filter";

const Header = ({ initialSuites, setApartmentCount, setSuites }) => {
  const [open, setOpen] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [value, setValue] = useState(0);
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country");
  const [adultCount, setAdultsCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const maxGuests = adultCount + childCount;
  const [locationFilter, setLocationFilter] = useState("All");
  const [maxGuestsFilter, setMaxGuestsFilter] = useState(0);

  const handleLocationClick = (el) => {
    setCity(el.target.dataset.city);
    setCountry(el.target.dataset.country);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const incrementAdultCount = () => {
    setAdultsCount((prevCount) => prevCount + 1);
  };

  const incrementChildCount = () => {
    setChildCount((prevCount) => prevCount + 1);
  };

  const decrementAdultCount = () => {
    if (adultCount <= 0) {
      return;
    } else {
      setAdultsCount(adultCount - 1);
    }
  };

  const decrementChildCount = () => {
    if (childCount <= 0) {
      return;
    } else {
      setChildCount(childCount - 1);
    }
  };

  const handleSearchClick = () => {
    setLocationFilter(city);
    setMaxGuestsFilter(maxGuests);
    setSearchClicked(true);
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (searchClicked) {
      setSuites(
        initialSuites.filter(
          (suite) =>
            suite.city === locationFilter && suite.maxGuests >= maxGuestsFilter
        )
      );

      setApartmentCount(
        initialSuites.filter(
          (suite) =>
            suite.city === locationFilter && suite.maxGuests >= maxGuestsFilter
        ).length
      );
    } else {
      setSuites(initialSuites);
      setApartmentCount(initialSuites.length);
    }
  }, [locationFilter, maxGuestsFilter, searchClicked, initialSuites]);

  const buttons = [
    <Button
      onClick={toggleDrawer}
      className="c-tabs__btn"
      key="one"
      sx={{ border: 0 }}
    >
      {city}, {country}
    </Button>,
    <Button
      onClick={toggleDrawer}
      className="c-tabs__btn"
      key="two"
      sx={{
        borderLeftColor: "#F2F2F2",
        borderTop: 0,
        borderBottom: 0,
        borderRightColor: "#F2F2F2",
      }}
    >
      Guests {childCount + adultCount}
    </Button>,
    <Button
      onClick={toggleDrawer}
      className="c-tabs__btn"
      key="three"
      sx={{
        borderLeftColor: "#F2F2F2",
        borderRight: 0,
        borderTop: 0,
        borderBottom: 0,
      }}
    >
      <SearchIcon sx={{ color: "#EB5757" }} />
    </Button>,
  ];
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          sx={{ borderRadius: 16, borderColor: "#F2F2F2" }}
          className="c-tabs__wrapper"
          size="large"
          aria-label="large button group"
        >
          {buttons}
        </ButtonGroup>
        <Drawer anchor={"top"} open={open} onClose={toggleDrawer}>
          <Box
            sx={{ height: 460 }}
            role="presentation"
            className="drawer-container"
          >
            <Filter
              setLocationFilter={setLocationFilter}
              setMaxPeopleFilter={setMaxGuestsFilter}
              value={value}
              handleChange={handleChange}
              city={city}
              country={country}
              adultCount={adultCount}
              childCount={childCount}
              handleSearchClick={handleSearchClick}
              handleLocationClick={handleLocationClick}
              incrementAdultCount={incrementAdultCount}
              decrementAdultCount={decrementAdultCount}
              incrementChildCount={incrementChildCount}
              decrementChildCount={decrementChildCount}
            />
          </Box>
        </Drawer>
      </Box>
    </header>
  );
};

export default Header;
