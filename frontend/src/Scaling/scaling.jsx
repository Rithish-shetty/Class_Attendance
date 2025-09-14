import useWindowSize from "./useWindowSize";

export const BASE_WIDTH = 1440;
export const BASE_HEIGHT = 900;

export const useScaling = () => {
  const { width, height } = useWindowSize();

  const scaleWidth = (size) => (size * width) / BASE_WIDTH;
  const scaleHeight = (size) => (size * height) / BASE_HEIGHT;
  const scaleFont = (size) => (size * width) / BASE_WIDTH;

  return { scaleWidth, scaleHeight, scaleFont };
};

// import { scaleWidth, scaleHeight, scaleFont } from "./scaling";

// <div
//   style={{
//     width: `${scaleWidth(400)}px`,
//     height: `${scaleHeight(200)}px`,
//     fontSize: `${scaleFont(24)}px`,
//   }}
// >
//   Box
// </div>
