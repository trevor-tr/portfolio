import { Suspense } from "react";
import AboutMe from "./components/about-me";
import Hero from "./components/hero";
import MotionCursor from "./components/motion-cursor";
import TextParralax from "./components/text-parralax";
import Loading from "./components/loading";
import Footer from "./components/footer";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-[500vh] antialiased">
        <Hero />
        <TextParralax />
        <AboutMe />
        <div className="h-screen" />
        <MotionCursor />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
