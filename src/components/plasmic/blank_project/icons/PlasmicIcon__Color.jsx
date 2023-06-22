// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ColorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
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
          "M29.991 0C13.453 0 0 13.457 0 30a29.78 29.78 0 005.713 17.584L1.974 58.73l11.532-3.686A29.761 29.761 0 0030.009 60C46.547 60 60 46.543 60 30S46.547 0 30.009 0h-.018zm-8.375 15.239c-.582-1.394-1.023-1.446-1.904-1.482-.3-.018-.634-.035-1.005-.035-1.146 0-2.345.335-3.068 1.076-.881.899-3.068 2.998-3.068 7.301s3.139 8.466 3.561 9.048c.441.581 6.119 9.54 14.935 13.192 6.893 2.857 8.94 2.593 10.508 2.258 2.292-.494 5.166-2.188 5.89-4.233.722-2.046.722-3.792.51-4.163-.211-.37-.793-.581-1.675-1.023-.88-.44-5.166-2.557-5.977-2.84-.794-.299-1.551-.193-2.15.654-.847 1.181-1.675 2.38-2.346 3.104-.529.564-1.393.635-2.116.335-.97-.406-3.684-1.359-7.035-4.34-2.592-2.31-4.355-5.184-4.866-6.048-.511-.881-.053-1.394.352-1.87.441-.546.864-.934 1.305-1.446.441-.511.688-.776.97-1.376.3-.581.088-1.181-.123-1.622-.212-.441-1.975-4.745-2.698-6.49z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ColorIcon;
/* prettier-ignore-end */
