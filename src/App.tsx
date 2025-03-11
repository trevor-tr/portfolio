import Hero from "./components/hero";
import MotionCursor from "./components/motion-cursor";
import TextParralax from "./components/text-parralax";

function App() {
  return (
    <div className="h-[500vh]">
      <Hero />
      <TextParralax />
      <MotionCursor />
    </div>
  );
}

export default App;
