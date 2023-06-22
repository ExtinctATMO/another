// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 61 60"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M55.188 28.66h-14.28a10.218 10.218 0 01-20.436 0H6.192A4.293 4.293 0 002 32.982v20.633a4.293 4.293 0 004.192 4.323h48.996a4.293 4.293 0 004.192-4.323V32.983a4.293 4.293 0 00-4.192-4.324z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.62"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M52.24 28.397V13.921c0-7.27 1.18-11.659-5.043-11.921H14.839C8.354 2 9.074 6.323 9.074 12.873v15.852"
        }
        stroke={"currentColor"}
        strokeWidth={"2.62"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M18.9 12.742h-.262a.727.727 0 01-.72-.72v-.262a.727.727 0 01.72-.72h.262a.728.728 0 01.72.72v.262a.727.727 0 01-.72.72zm3.799 6.354h-.262a.727.727 0 01-.72-.72v-.263a.728.728 0 01.72-.72h.262a.727.727 0 01.72.72v.262a.655.655 0 01-.72.721z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.31"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M52.371 13.004l6.354 17.358m-56.135.197l6.288-16.9M24.14 11.89h11.463m-7.926 6.354H39.14"
        }
        stroke={"currentColor"}
        strokeWidth={"2.62"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
