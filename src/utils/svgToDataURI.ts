export function svgToDataURI(svgString: string): string {
  if (typeof svgString !== "string") {
    throw new Error("Invalid input: SVG must be a string.");
  }

  // Optimize SVG by removing unnecessary whitespace
  const optimizedSvg = svgString
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, " ") // Convert multiple spaces to a single space
    .replace(/>\s+</g, "><") // Remove spaces between tags
    .replace(/#/g, "%23") // Encode hash (#) for colors
    .replace(/"/g, "'"); // Use single quotes to avoid double-quote encoding issues

  // Convert to Data URI format
  return `data:image/svg+xml,${encodeURIComponent(optimizedSvg)}`;
}
