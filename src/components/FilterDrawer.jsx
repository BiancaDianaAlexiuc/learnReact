import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

//COMPONENTS
import LocationList from "./LocationList";
import Counter from './Counter';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 3 }}>
         {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function FilterDrawer() {
  const [value, setValue] = React.useState(0);

  const [location, setLocation] = React.useState('Location city');
  // const [totalCount, setTotalCount] = React.useState(0);


  const handleLocationClick = (el) => {
    setLocation(el.target.dataset.location);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleTotalCount = (el) => {
  //   console.log('total ammount', el.target.dataset.value)
  //   setTotalCount(el.target.dataset.value);
  // }

  return (
    <Box className="c-filter__wrapper">
      <Box >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="c-filter__tabs"
        >
          <Tab
            className="c-filter__tab"
            sx={{ borderRight: 1, borderColor: "#F2F2F2" }}
            label={
            <React.Fragment>
                <div className="label-wrapper">
                    <span style={{ fontWeight: 800, fontSize: "9px" }}> LOCATION </span>
                    <p style={{ fontSize: "14px", fontWeight: 400, margin: 0, lineHeight: "18px" }}>
                      {location}
                    </p>
                </div>
              </React.Fragment>
            }
          />
          <Tab
            className="c-filter__tab"
            sx={{ borderRight: 1, borderColor: "#F2F2F2"}}
            label={
            <React.Fragment>
                <div className="label-wrapper">
                    <span style={{ fontWeight: 800, fontSize: "9px" }}>GUESTS</span>
                    <p style={{ fontSize: "14px", fontWeight: 400, margin: 0, lineHeight: "18px" }}>
                      Add guests
                    </p>
                </div>
              </React.Fragment>
            }
          />
          <Tab
            className="c-filter__tab c-filter__tab--search"
            label={
            <React.Fragment>
                <span  className="search-element">
                    <SearchIcon sx={{ color: "#F2F2F2", paddingRight: '5px' }} /> 
                    Search 
                 </span>
            </React.Fragment>
            }
          />
        </Tabs>
      </Box>

      <TabPanel className="c-filter__panel" value={value} index={0}>
        <ul className="c-filter__location-list">
            <LocationList onClick={handleLocationClick} />
        </ul>
      </TabPanel>

      <TabPanel className="c-filter__panel" value={value} index={1}>
          <div className="guests-wrapper">
            <div className="adults">
                <p className="title">Adults</p>
                <p className="subtitle">Ages 13 or above</p>
                <Counter />
            </div>

            <div className="children">
                <p className="title">Children</p>
                <p className="subtitle">Ages 2-12</p>
                 <Counter />
            </div>

          </div>
      </TabPanel>

      <TabPanel className="c-filter__panel" value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export default FilterDrawer;
