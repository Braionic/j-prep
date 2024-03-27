import "../src/components/style.css";
import StarRating from "./components/StarRating/index.jsx";
import ColorPicker from "./components/colorpicker/index.jsx";
import Accordion from "./components/index.jsx";
import Slider from "./components/slider/index.jsx";
import Loadmore from "./components/loadmore/index.jsx";
import LinkTree from "./components/linkTree/index.jsx";
import menulink from "./components/linkTree/data.jsx";
import Themeswitch from "./components/themeChange/index.jsx";
import QRCode from "react-qr-code";
import QrCode from "./components/qr-code/index.jsx";
import ScrollIndicator from "./components/scrollIndicator/index.jsx";
import Multitab from "./components/multitab/index.jsx";
import Modal from "./components/modal/index.jsx";
import GitHubProfile from "./components/github/index.jsx";
import SearchSuggestion from "./components/searchSuggestion/index.jsx";
import Tiktactoe from "./components/Tic-tac-toe/index.jsx";
import FeatureFlag from "./components/feature-flag/FeatureFlag.jsx";
import Context from "./components/feature-flag/FeatureContext.jsx";
import FeatureContext from "./components/feature-flag/FeatureContext.jsx";
import CustomHooks from "./components/customHooks/index.jsx";
import ScrollToTop from "./components/scroll-to-top/index.jsx";

function App() {
  return (
    <>
      {/* Accordion */}
      {/*<Accordion /> */}
      {/* color picker}
      {/*<ColorPicker />*/}
      {/* star rating*/}
      {/* star rating */}
      {/*<StarRating numberOfStars={10}  />*/}
      {/*<Slider page={2} limit={11} /> */}
      {/*<Loadmore />*/}
      {/* <LinkTree menu={menulink} /> */}
      {/* <Themeswitch /> */}
      {/*<QrCode /> */}
      {/*<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />*/}
      {/* <Multitab /> */}
      {/*<Modal /> */}
      {/*<GitHubProfile /> */}
      {/*{<SearchSuggestion />*/}
      {/*<Tiktactoe />*/}

     {/* <FeatureContext>
        <FeatureFlag />
      </FeatureContext>
  */}
  {/*<CustomHooks />*/}
  <ScrollToTop />
    </>
  );
}

export default App;
