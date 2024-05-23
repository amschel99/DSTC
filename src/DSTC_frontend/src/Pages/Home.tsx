import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <div style={{ marginBottom: "10PX" }}></div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
