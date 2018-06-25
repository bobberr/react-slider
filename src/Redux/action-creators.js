import types from "./actionTypes";
import feed from "../feed.json";

export const getSlides = () => {
  let slides = [];
  for (let key in feed) {
    slides = [...slides, ...feed[key]];
  }
  return { type: types.GET_SLIDES, payload: slides };
};
