import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import DSTCComponent from "./Pages/About";
import PublishStoryComponent from "./Pages/Share"
import BlogCardsComponent from "./Pages/Dusts";
import Tokenomics from "./Pages/Tokenomics";
import ArticleComponent from "./Pages/Dust";
import WalletPopup from "./components/Wallet";
import PurchasePopup from "./components/PurchaseDust";
export const App = () => {


 const [showPopup, setShowPopup] = useState(false);
  const [showPurchasePopUp, setshowPurchasePopUp] = useState(false);


   const handleConnectWallet = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePurchasePopup = () => {
    setshowPurchasePopUp(true);
  };

  const closePurchasePopup = () => {
    setshowPurchasePopUp(false);
  };

  return (
    <BrowserRouter>


       {showPopup && (
          <WalletPopup
            onClose={handleClosePopup}
            handlePurchasePopup={handlePurchasePopup}
          />
        )}
          {showPurchasePopUp && (
          <PurchasePopup onClose={closePurchasePopup} />
        )}

      <Routes>
        <Route path="/" element={<Home handleConnectWallet={handleConnectWallet} />}>
          <Route index element={<DSTCComponent />}></Route>
          <Route path="/Share" element={<PublishStoryComponent />}></Route>
          <Route path="/Dusts" element={<BlogCardsComponent />}></Route>
          <Route path="/Tokenomics" element={<Tokenomics />}></Route>
          <Route path="/Dusts/:dustId" element={<ArticleComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;