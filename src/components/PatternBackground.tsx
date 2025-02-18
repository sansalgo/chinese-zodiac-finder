import React, { ReactNode, ReactElement } from "react";
import { svgToDataURI } from "../utils/svgToDataURI";

interface PatternBackgroundProps {
  children: ReactNode;
  opacity?: number;
}

const PatternBackground: React.FC<PatternBackgroundProps> = ({
  children,
  opacity = 0.1,
}) => {
  // Extract the first child, which should be an SVG
  const svgElement = React.Children.only(children) as ReactElement;

  if (!svgElement || svgElement.type !== "svg") {
    throw new Error("PatternBackground expects a single <svg> child.");
  }

  // Get the outer HTML of the SVG and convert it to a Data URI
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const dataURI = svgToDataURI(svgString);

  return (
    <div
      className="h-screen w-screen bg-center bg-repeat"
      style={{
        backgroundImage: `url(${dataURI})`,
        opacity,
      }}
    />
  );
};

export default PatternBackground;
