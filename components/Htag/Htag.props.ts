import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>,HTMLHeadingElement> {
    children: ReactNode,
    h: "1" | "2" | "3"
}

export default HtagProps;