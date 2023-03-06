import { Header } from "./components/Header";
import { SectionOne } from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";
import { SectionThree } from "./components/SectionThree";
import { SectionFour } from "./components/SectionFour";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header/>
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
