import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer"

const Home = ({handleConnectWallet}:any) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <div style={{ marginBottom: "10PX" }}></div>
      <Navbar handleConnectWallet={handleConnectWallet} />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Home;
