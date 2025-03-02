import { useState } from "react";
import { DateInput } from "./components/date-input";
import { SignDisplay } from "./components/sign-display";
import { zodiacSigns } from "./data/zodiac-data";
import { DateObject } from "./types/date";
import { ZodiacSigns } from "./types/sign";

function App() {
  const [sign, setSign] = useState<ZodiacSigns | null>(null);

  const handleEnter = (value: DateObject) => {
    setSign(zodiacSigns[(value.year - 4) % 12]);
  };

  return (
    <div>
      {/* Background */}
      <div className="fixed -z-[1] min-h-lvh w-full bg-[radial-gradient(50%_50%_at_50%_50%,#E91E25_0%,#AC161B_59.6%,#831115_100%)] after:absolute after:inset-0 after:bg-[url(./assets/pattern.svg)] after:bg-center after:bg-repeat after:opacity-10"></div>

      {/* Content */}
      <div>
        {sign ? (
          <div className="p-4">
            <SignDisplay sign={sign} handleBack={() => setSign(null)} />
          </div>
        ) : (
          <div className="flex min-h-dvh items-center justify-center">
            <DateInput handleEnter={handleEnter} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
