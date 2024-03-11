import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";

const paragraphClasses = {
    sm: "text-[14px]/[150%]",
    md: "text-[16px]/[171%]",
    lg: "text-[16px]/[161%]"
}

const P =({size = "md", className, children, ...props}: ParagraphProps) => {
    return (
        <p className={cn(paragraphClasses[size], className)} 
        {...props}
        >
            {children}
        </p>
    )
}

export { P };
