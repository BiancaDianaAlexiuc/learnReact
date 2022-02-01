import React from "react";

// MATERIAL IMPORTS
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Drawer from "@mui/material/Drawer";

//Components
import FilterDrawer from "./FilterDrawer";

const HeaderTabs = () => {
  const [open, setOpen] = React.useState(false);

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
      Location, Helsinky
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
      Add guests
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
          <FilterDrawer />
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeaderTabs;
