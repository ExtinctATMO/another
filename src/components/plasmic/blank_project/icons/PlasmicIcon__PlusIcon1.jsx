// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlusIcon1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.667 16c0-.736.597-1.333 1.333-1.333h24a1.333 1.333 0 010 2.666H4A1.333 1.333 0 012.667 16z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16 2.667c.736 0 1.333.597 1.333 1.333v24a1.333 1.333 0 11-2.666 0V4c0-.736.597-1.333 1.333-1.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlusIcon1Icon;
/* prettier-ignore-end */
