import { zodiacData } from "@/data/zodiac-data";
import { motion } from "motion/react";
import { ZodiacSigns } from "../types/sign";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { DogSign } from "./vectors/dog-sign";
import { DragonSign } from "./vectors/dragon-sign";
import { GoatSign } from "./vectors/goat-sign";
import { HorseSign } from "./vectors/horse-sign";
import { MonkeySign } from "./vectors/monkey-sign";
import { OxSign } from "./vectors/ox-sign";
import { PigSign } from "./vectors/pig-sign";
import { RabbitSign } from "./vectors/rabbit-sign";
import { RatSign } from "./vectors/rat-sign";
import { Ring } from "./vectors/ring";
import { RoosterSign } from "./vectors/rooster-sign";
import { SnakeSign } from "./vectors/snake-sign";
import { TigerSign } from "./vectors/tiger-sign";

function SignRenderer({ sign, scale }: { sign: ZodiacSigns; scale: number }) {
  const Sign = () => {
    switch (sign) {
      case "dog":
        return <DogSign scale={scale} />;
      case "dragon":
        return <DragonSign scale={scale} />;
      case "goat":
        return <GoatSign scale={scale} />;
      case "horse":
        return <HorseSign scale={scale} />;
      case "monkey":
        return <MonkeySign scale={scale} />;
      case "ox":
        return <OxSign scale={scale} />;
      case "pig":
        return <PigSign scale={scale} />;
      case "rabbit":
        return <RabbitSign scale={scale} />;
      case "rat":
        return <RatSign scale={scale} />;
      case "rooster":
        return <RoosterSign scale={scale} />;
      case "snake":
        return <SnakeSign scale={scale} />;
      case "tiger":
        return <TigerSign scale={scale} />;
      default:
        return <div />;
    }
  };

  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <Ring scale={scale} />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <Sign />
      </div>
      <div></div>
    </div>
  );
}

export function SignDisplay({
  sign = null,
  handleBack,
}: {
  sign: ZodiacSigns | null;
  handleBack: () => void;
}) {
  if (!sign) {
    return null;
  }
  return (
    <div className="mx-auto w-xs">
      <div className="space-y-4">
        <div className="grid grid-cols-6">
          <button
            className="border-yellow text-yellow bg-red-iii/50 flex aspect-square cursor-pointer items-center justify-center rounded-md border bg-clip-padding p-2 text-center text-2xl font-bold outline-none select-none"
            onClick={handleBack}
          >
            {"<-"}
          </button>
        </div>
        <Card className="bg-red-iii/50 border-yellow overflow-hidden shadow-lg md:col-span-1">
          <div className="flex aspect-square items-center justify-center p-6">
            <SignRenderer sign={sign} scale={0.8} />
          </div>
          <CardHeader className="border-yellow/30 border-t pb-2">
            <CardTitle className="text-yellow text-center text-2xl">
              {zodiacData[sign].sign}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="border-yellow/50 text-yellow">
                Element: {zodiacData[sign].element}
              </Badge>
              <Badge variant="outline" className="border-yellow/50 text-yellow">
                {zodiacData[sign].yin_yang}
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-red-iii/50 border-yellow shadow-lg md:col-span-2">
          <CardHeader className="border-yellow/30 border-b">
            <CardTitle className="text-yellow text-xl">
              Characteristics
            </CardTitle>
            <CardDescription className="text-yellow/80">
              Key traits and compatibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-yellow mb-2 font-medium">
                Personality Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {zodiacData[sign].traits.map((trait) => (
                  <Badge
                    key={trait}
                    variant="outline"
                    className="text-yellow border border-yellow-500/50"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="bg-yellow/30" />
            <div className="space-y-3">
              <div>
                <h3 className="text-yellow mb-2 font-medium">Best Matches</h3>
                <div className="flex flex-wrap gap-2">
                  {zodiacData[sign].compatibility.best_matches.map((match) => (
                    <Badge
                      key={match}
                      variant="outline"
                      className="text-yellow border-yellow/50"
                    >
                      {match}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-yellow mb-2 font-medium">
                  Least Compatible
                </h3>
                <div className="flex flex-wrap gap-2">
                  {zodiacData[sign].compatibility.least_matches.map((match) => (
                    <Badge
                      key={match}
                      variant="outline"
                      className="border-yellow/50 text-yellow"
                    >
                      {match}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="bg-yellow/30" />
            <div>
              <h3 className="text-yellow mb-2 font-medium">Lucky Aspects</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-yellow/80 text-sm">Lucky Numbers</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {zodiacData[sign].lucky_aspects.numbers.map((number) => (
                      <Badge
                        key={number}
                        variant="outline"
                        className="border-yellow/50 text-yellow"
                      >
                        {number}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-yellow/80 text-sm">Lucky Colors</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {zodiacData[sign].lucky_aspects.colors.map((color) => (
                      <Badge
                        key={color}
                        variant="outline"
                        className="border-yellow/50 text-yellow"
                      >
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-yellow/80 text-sm">Lucky Flowers</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {zodiacData[sign].lucky_aspects.flowers.map((flower) => (
                      <Badge
                        key={flower}
                        variant="outline"
                        className="border-yellow/50 text-yellow"
                      >
                        {flower}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-yellow/80 text-sm">Lucky Directions</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {zodiacData[sign].lucky_aspects.directions.map(
                      (direction) => (
                        <Badge
                          key={direction}
                          variant="outline"
                          className="border-yellow/50 text-yellow"
                        >
                          {direction}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
