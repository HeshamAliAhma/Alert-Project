import { ReactNode } from "react";

export interface IProps {
    type:AlertTypes,
    headerIcon:ReactNode,
    title:string,
    description:string,
    children?:ReactNode;
  }





export type AlertTypes = 
  "alert-default" | 'alert-info' | 'alert-warning' | 'alert-error' | 'alert-success'
