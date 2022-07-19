import Header from "./Components/Header/Header";
import Nanoverse from "./Components/Nanoverse/Nanoverse";
import Blackbox from "./Components/Blackbox/Blackbox";
import Roadmap from "./Components/Roadmap/Roadmap";
import Team from "./Components/Team/Team";
import CommanQutions from "./Components/CommanQutions/CommanQutions";
import JoinheCommunity from "./Components/Jointhecommunity/JoinheCommunity";
import Footer from "./Components/Footer/Footer";
// import {  Routes, Route, } from "react-router-dom";
import Archetypes from "./Components/Archetypes/Archetypes";
function App() {
  return (
    <>
      <Header />
      <Nanoverse />
      <Archetypes />
      <Blackbox />
      <Roadmap />
      <Team />
      <CommanQutions />
      <JoinheCommunity />
      {/* <Routes>
        <Route path="/" element={<Nanoverse />} />
        <Route path="/archetypes" element={<Archetypes />} />
        <Route path="/blackbox" element={<Blackbox />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/team" element={<Team />} />
        <Route path="/commanQutions" element={<CommanQutions />} />
        <Route path="/JoinheCommunity" element={<JoinheCommunity />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
