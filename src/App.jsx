import React from "react";
import logo from "./icons/logo.svg";
import "./App.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//CARD
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

// DATA
import stays from "./data/stays.json";

const cardData = stays.map((el) => {
  return (
    <Grid key={el.id} item xs={12} md={6} lg={4}>
      <Card className="c-card__stay" sx={{ maxWidth: 345 }}>
        <CardMedia
          className="c-card__img"
          component="img"
          height="140"
          image={el.photo}
          alt="green iguana"
        />
        <CardContent>
          <div className="c-card__desc">
            <span>
              { el.superHost ?  <Chip className="super-host" label="SUPER HOST" variant="outlined" /> :  "" }
              <span className="type"> {el.type} </span>
            </span>
            <span className="rating">
              <StarIcon sx={{ color: "#EB5757", fontSize: "16px", paddingRight: "5px" }} />
              {el.rating}
            </span>
          </div>

          <p className="title"> {el.title}</p>
        </CardContent>
      </Card>
    </Grid>
  );
});

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="c-tabs__wrapper">
      <Box className="c-tabs__tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className="c-tabs__tab"
            sx={{ borderRight: 1, borderColor: "#F2F2F2" }}
            label="Location"
            {...a11yProps(0)}
          />
          <Tab
            className="c-tabs__tab"
            sx={{ borderRight: 1, borderColor: "#F2F2F2" }}
            label="Add Guests"
            {...a11yProps(1)}
          />
          <Tab
            icon={<SearchIcon sx={{ color: "#EB5757" }} />}
            className="c-tabs__tab"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <BasicTabs />
    </header>
  );
}

function App() {
  return (
    <Container className="App" maxWidth="lg">
      <Header />
      <div className="c-stays__wrapper">
        <div className="c-stays__header">
          <p className="c-stays__header-title">Stays in Finland</p>
          <p className="c-stays__header-number">12+</p>
        </div>
        <Grid container spacing={4}>
          {cardData}
        </Grid>
      </div>
    </Container>
  );
}

export default App;
