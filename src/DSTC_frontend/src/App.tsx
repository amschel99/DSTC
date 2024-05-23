import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import DSTCComponent from "./Pages/About";
import PublishStoryComponent from "./Pages/Share";
import BlogCardsComponent from "./Pages/Dusts";
import Tokenomics from "./Pages/Tokenomics";
import ArticleComponent from "./Pages/Dust";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
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
