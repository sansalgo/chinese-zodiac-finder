import { MoveLeft, MoveRight } from "lucide-react";
import { useAnimate } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const keys = [
  { label: 1, value: "1" },
  { label: 2, value: "2" },
  { label: 3, value: "3" },
  { label: "<-", value: "Backspace" },
  { label: 4, value: "4" },
  { label: 5, value: "5" },
  { label: 6, value: "6" },
  { label: 7, value: "7" },
  { label: 8, value: "8" },
  { label: 9, value: "9" },
  { label: 0, value: "0" },
  { label: "->", value: "Enter" },
];

export function DateInput() {
  const [value, setValue] = useState<string>("YYYY:MM:DD");
  const [displayScope, displayAnimate] = useAnimate();
  const [buttonScope, buttonAnimate] = useAnimate();
  const lastKeyPressed = useRef<string | null>(null);
  const format = "YYYY:MM:DD";

  const triggerDisplayShake = useCallback(() => {
    displayAnimate(
      displayScope.current,
      { x: [-1, 2, -4, 4, -4, 4, -4, 2, -1, 0] },
      { duration: 0.3, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] }
    );
  }, [displayAnimate, displayScope]);

  const handleKeyAction = useCallback(
    (key: string) => {
      if (keys.find((k) => k.value === key) === undefined) return;

      buttonAnimate(
        `[data-key="${key}"]`,
        { scale: [1, 0.9, 1.05, 0.98, 1] },
        { duration: 0.2, times: [0, 0.2, 0.4, 0.8, 1] }
      );

      if (key === "Backspace") {
        if (value === format) {
          triggerDisplayShake();
          return;
        }
        let index = -1;
        for (let i = value.length - 1; i >= 0; i--) {
          if (format[i] !== ":" && value[i] !== format[i]) {
            index = i;
            break;
          }
        }

        if (index !== -1) {
          const newDate = value.split("");
          newDate[index] = format[index]; // Restore placeholder
          setValue(newDate.join(""));
        }
      } else if (key === "Enter") {
        triggerDisplayShake();
      } else {
        const index =
          value.indexOf("Y") !== -1
            ? value.indexOf("Y")
            : value.indexOf("M") !== -1
            ? value.indexOf("M")
            : value.indexOf("D");

        if (index !== -1) {
          const newDate = value.split("");
          newDate[index] = key;
          setValue(newDate.join(""));
        }
      }
    },
    [buttonAnimate, triggerDisplayShake, value]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lastKeyPressed.current === event.key) return;
      const button = buttonScope.current?.querySelector(
        `[data-key="${event.key}"]`
      ) as HTMLButtonElement;
      button?.setAttribute("data-active", "true");
      lastKeyPressed.current = event.key;
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const button = buttonScope.current?.querySelector(
        `[data-key="${event.key}"]`
      ) as HTMLButtonElement;
      button?.setAttribute("data-active", "false");
      button?.click(); // Programmatically trigger click
      lastKeyPressed.current = null;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyAction]);

  return (
    <div className="w-3xs space-y-4">
      {/* Display area */}
      <div
        ref={displayScope}
        className="h-14 text-2xl font-bold rounded-md flex justify-center items-center border-3 border-yellow bg-yellow/50 select-none"
      >
        {value.split("").map((char, index) => (
          <span
            key={index}
            className={`${
              format[index] === char ? "opacity-50" : "opacity-100"
            }`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Keypad grid */}
      <div ref={buttonScope} className="grid grid-cols-4 gap-2">
        {/* Numbers 1-3 and backspace */}
        {keys.map((key) => (
          <button
            key={key.value}
            data-key={key.value}
            className=" flex justify-center items-center outline-none select-none cursor-pointer border-3 font-bold text-2xl border-yellow  aspect-square text-center rounded-md bg-yellow/50 data-[active=true]:bg-yellow active:bg-yellow data-[active=true]:border-yellow/50 active:border-yellow/50 bg-clip-padding"
            onClick={() => handleKeyAction(key.value)}
          >
            {key.label}
          </button>
        ))}
      </div>
    </div>
  );
}
