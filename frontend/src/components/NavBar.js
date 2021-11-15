import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import AuthButton from './AuthButton';
import { makeStyles } from '@material-ui/core/styles';
import MousepopoverClick from './MousepopoverClick';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2b6777",
    minHeight: "70px",
    maxHeight: "140px",
    padding: "1px 7%",
  },

  logoLink: {
    height: "50px",
    "&:hover": {
      opacity: 0.7,
    },
  },

  links: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },

  indiLink: {
    marginLeft: "7px",
    marginRight: "7px",
    fontSize: "21px",
    "&:hover": {
      color: "#c8d8e4",
      cursor: "pointer",
    },
  },

  accIcon: {
    marginLeft: "20px",
    fontSize: "35px",
    "&:hover": {
      color: "#9c9c9c",
    },
  },

  navMargin: {
    height: "70px",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  const [anchorElAcc, setAnchorElAcc] = React.useState(null);
  const handlePopoverAcc = (event) => {
    setAnchorElAcc(event.currentTarget);
  };
  const handlePopoverCloseAcc = () => {
    setAnchorElAcc(null);
  };

  return (
    <>
      <div className={classes.navMargin}></div>
      <AppBar className={classes.root}>
        <a href="/">
          <img src="https://user-images.githubusercontent.com/41566813/124344282-5bfadd00-dc25-11eb-8136-7542ef8916b3.png"
            alt="dmtLogo" className={classes.logoLink} />
        </a>
        <div className={classes.links}>
          <a className={classes.indiLink}>Projects</a>
          <a className={classes.indiLink}>Home</a>
          <AccountCircleIcon fontSize="large" className={`${classes.indiLink} ${classes.accIcon}`} onClick={handlePopoverAcc} />
        </div>
      </AppBar>

      <MousepopoverClick anchorEl={anchorElAcc} handlePopoverClose={handlePopoverCloseAcc}>
        <Box p={2}>
          <AuthButton />
        </Box>
      </MousepopoverClick>


    </>
  )
}