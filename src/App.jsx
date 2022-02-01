import React, { useEffect } from "react";

// Styles
import "./App.scss";
import logo from "./icons/logo.svg";

// COMPONENTS
// import Header from "./components/Header";
// import HeaderTabs from "./components/HeaderTabs";
// import FilterDrawer from "./components/FilterDrawer";
import CardData from "./components/Card";
import LocationList from "./components/LocationList";
import Counter from "./components/Counter";

// MATERIAL IMPORTS
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Drawer from "@mui/material/Drawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// DATA
import stays from "./data/stays.json";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ div: 3 }}>{children}</Box>}
    </div>
  );
};

function App() {
  const [open, setOpen] = React.useState(false);
  const [searchClicked, setSearchClicked] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [city, setCity] = React.useState("City");
  const [country, setCountry] = React.useState("Country");
  const [adultCount, setAdultsCount] = React.useState(0);
  const [childCount, setChildCount] = React.useState(0);
  const [apartmentCount, setApartmentCount] = React.useState(stays.length);

  const maxGuests = adultCount + childCount;

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
    console.log(city, country, childCount, adultCount);
    setSearchClicked(true);
    setOpen(false);
    setApartmentCount(
      stays.filter(
        (apartment) =>
          apartment.city === city && apartment.maxGuests >= maxGuests
      ).length
    );
  };

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

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
      onClick={handleSearchClick}
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

  // useEffect(() => {

  // });

  const notFilteredCards = (
    <>
      {stays.map((item) => (
        <CardData el={item} key={item.id} />
      ))}
    </>
  );

  const filteredByLocationGuestsCards = (
    <>
      {stays
        .filter(
          (apartment) =>
            apartment.city === city && apartment.maxGuests >= maxGuests
        )
        .map((item) => {
          return <CardData el={item} key={item.id} />;
        })}
    </>
  );

  return (
    <Container className="App" maxWidth="lg">
      {/* <Header /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HeaderTabs /> */}
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
              {/* <FilterDrawer /> */}
              <Box className="c-filter__wrapper">
                <Box className="c-filter__tabs" sx={{ display: "flex" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{ width: "100%" }}
                  >
                    <Tab
                      className="c-filter__tab"
                      sx={{ borderRight: 1, borderColor: "#F2F2F2" }}
                      label={
                        <React.Fragment>
                          <div className="label-wrapper">
                            <span style={{ fontWeight: 800, fontSize: "9px" }}>
                              LOCATION
                            </span>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: 400,
                                margin: 0,
                                lineHeight: "18px",
                              }}
                            >
                              {`${city}, ${country}`}
                            </p>
                          </div>
                        </React.Fragment>
                      }
                    />
                    <Tab
                      className="c-filter__tab"
                      sx={{ borderRight: 1, borderColor: "#F2F2F2" }}
                      label={
                        <React.Fragment>
                          <div className="label-wrapper">
                            <span style={{ fontWeight: 800, fontSize: "9px" }}>
                              GUESTS
                            </span>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: 400,
                                margin: 0,
                                lineHeight: "18px",
                              }}
                            >
                              {adultCount + childCount}
                            </p>
                          </div>
                        </React.Fragment>
                      }
                    />
                  </Tabs>
                  <div className="c-filter__tab c-filter__tab--search">
                    <Button
                      onClick={handleSearchClick}
                      className="search-element"
                      startIcon={
                        <SearchIcon
                          sx={{ color: "#F2F2F2", paddingRight: "5px" }}
                        />
                      }
                    >
                      Search
                    </Button>
                  </div>
                </Box>

                <TabPanel className="c-filter__panel" value={value} index={0}>
                  <ul className="c-filter__location-list">
                    {stays.map((el) => {
                      return (
                        <LocationList
                          location={handleLocationClick}
                          el={el}
                          key={el.id}
                        />
                      );
                    })}
                  </ul>
                </TabPanel>

                <TabPanel className="c-filter__panel" value={value} index={1}>
                  <div className="guests-wrapper">
                    <div className="adults">
                      <p className="title">Adults</p>
                      <p className="subtitle">Ages 13 or above</p>
                      <Counter
                        count={adultCount}
                        increment={incrementAdultCount}
                        decrement={decrementAdultCount}
                      />
                    </div>

                    <div className="children">
                      <p className="title">Children</p>
                      <p className="subtitle">Ages 2-12</p>
                      <Counter
                        count={childCount}
                        increment={incrementChildCount}
                        decrement={decrementChildCount}
                      />
                    </div>
                  </div>
                </TabPanel>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </header>
      <div className="c-stays__wrapper">
        <div className="c-stays__header">
          <p className="c-stays__header-title">Stays in Finland</p>
          <p className="c-stays__header-number">{apartmentCount}+</p>
        </div>
        <Grid container spacing={4}>
          {searchClicked ? filteredByLocationGuestsCards : notFilteredCards}
        </Grid>
      </div>
    </Container>
  );
}

export default App;
