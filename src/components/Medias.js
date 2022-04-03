import {createMedia} from "@artsy/fresnel";

const MediaBreakpoints=createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

export const mediaStyle=MediaBreakpoints.createMediaStyle()
export const {Media,MediaContextProvider}=MediaBreakpoints
