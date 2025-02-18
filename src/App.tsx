import { useState } from "react";
import "./App.css";
import { Corner } from "./components/vectors/corner";
import { Ring } from "./components/vectors/ring";
import { HorseSign } from "./components/vectors/horse-sign";
import { motion } from "motion/react";
import { Sign } from "./components/Sign";
import { DateInput } from "./components/DateInput";

function App() {
  const [sign, setSign] = useState<string | null>(null);

  return (
    <>
      <div className="relative  bg-[radial-gradient(50%_50%_at_50%_50%,#E91E25_0%,#AC161B_59.6%,#831115_100%)] h-screen w-full">
        <div className="h-full w-full bg-center bg-[url(./assets/pattern.svg)] bg-repeat opacity-10"></div>
        <div className="absolute top-2.5 left-2.5">
          <Corner scale={0.5} />
        </div>
        <div className="absolute scale-x-[-1]  top-2.5 right-2.5">
          <Corner scale={0.5} />
        </div>
        <div className="absolute scale-x-[-1] scale-y-[-1] bottom-2.5 right-2.5">
          <Corner scale={0.5} />
        </div>
        <div className="absolute scale-y-[-1]  bottom-2.5 left-2.5">
          <Corner scale={0.5} />
        </div>

        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div>
            <DateInput />
          </div>
          <Sign sign={sign} />
        </div>
      </div>
    </>
  );
}

export default App;
