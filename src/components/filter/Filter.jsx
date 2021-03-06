import React from "react";

// MATERIAL IMPORTS
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

//COMPONENTS
import LocationList from "../locations/LocationList";
import Counter from "../counter/Counter";

// DATA
import stays from "../../data/stays.json";

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

const Filter = ({
  value,
  handleChange,
  city,
  country,
  adultCount,
  childCount,
  handleSearchClick,
  handleLocationClick,
  incrementAdultCount,
  decrementAdultCount,
  incrementChildCount,
  decrementChildCount,
}) => {
  return (
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
              <SearchIcon sx={{ color: "#F2F2F2", paddingRight: "5px" }} />
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
  );
};

export default Filter;
