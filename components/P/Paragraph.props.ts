import { DetailedHTMLProps, ParamHTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size: "sm" | "md" | "lg";
    children: ReactNode;
}