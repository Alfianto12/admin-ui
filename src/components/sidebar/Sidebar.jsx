import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
    <div className="top">
        <Link to="/">
        <span className="logo">Store</span>
        </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
        <p className="title">MAIN</p>
        <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to="/users">
            <li>
            <PersonOutlineIcon className="icon"/>
            <span>Users</span>
            </li>
        </Link>
        <Link to="/products">
            <li>
            <StorefrontIcon className="icon"/>
            <span>Products</span>
            </li>
        </Link>
        <li>
            <LocalGroceryStoreIcon className="icon"/>
            <span>Orders</span>
        </li>
        <Link to="/categories">
        <li>
          <CategoryIcon className="icon"/>
          <span>Categories</span>
        </li>
        </Link>
        <p className="title">USER</p>
        <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
        </li>
        <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
        </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK"})}></div>
        </div>
    </div>
    );
};

export default Sidebar;