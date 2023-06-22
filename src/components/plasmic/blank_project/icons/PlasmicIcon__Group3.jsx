// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 38"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.31 22.026H0v.938h18.31v-.938zm0 3.074H0v.938h18.31V25.1zm0-14.087H0v.937h18.31v-.937zm0 3.076H0v.937h18.31v-.937zM18.31 0H0v.938h18.31V0zm0 3.075H0v.938h18.31v-.938zm0 29.963H0v.937h18.31v-.937zm0 3.075H0v.937h18.31v-.937z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
