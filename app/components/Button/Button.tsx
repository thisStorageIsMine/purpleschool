import {ButtonProps} from "./Button.props";
import cn from "classnames";
import ArrowIcon from "./Vector.svg";

const Button = ({children, appearance, arrow = "none", className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn("h-35px font-normal text-base/[100%] text-center rounded-[5px] p-[10px]",className, {
            "bg-purple text-white [&_svg]:fill-white hover:bg-purple-dark [&:hover_svg]:fill-black": appearance === "primary",
            "border border-gray-light text-black hover:bg-purple hover:text-white [&:hover_svg]:fill-white": appearance === "ghost"
        })}
        {...props}
        >
            {children}
            {arrow !== "none" && <span className={cn("inline-block ml-[10px] ",{
                "rotate-90": arrow === "down",
                "": arrow === "right"
            }
            )}>
                <ArrowIcon/>
            </span> }
        </button>
    )
}

export { Button };