import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import runPrints from "../img/footsteps.webp";

export default function Navbar() {

  let [anchorEl, setAnchorEl] = React.useState(null);

  let handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  let handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div>
        <Link to="/" className="navbar-brand">Run Tracker</Link>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Link to="#"  id="navMenu-explore">explore</Link>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="navMenu" onClick={handleClose}> <Link to="/" className="nav-link">Run Logs</Link> </MenuItem>
            <MenuItem className="navMenu" onClick={handleClose}> <Link to="/graphs" className="nav-link">Run Data</Link> </MenuItem>
            <MenuItem className="navMenu" onClick={handleClose}> <Link to="/add" className="nav-link">Add Run</Link> </MenuItem>
          </Menu>
        </div>
        <div>
          <img src={runPrints} alt="boots" id="nav-pic" />
        </div>

      </nav>
    </div>
  );
}
