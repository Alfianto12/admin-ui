import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">top left</div>
          <div className="right">top right</div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </div>
  );
};

export default Single;