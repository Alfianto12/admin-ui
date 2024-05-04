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
          <div classNamne="left">Top left</div>
          <div className="right">Top right</div>
        </div>
        <div className="bottom">Bottom</div>
      </div>
    </div>
  );
};

export default Single;