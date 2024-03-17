import { TagProps } from "./Tag.props";
import cn from "classnames";

const tagAppearanceClasses = {
    ghost: "bg-transparent border border-gray-light text-black font-medium",
    primary: "bg-transparent border border-purple text-purple font-medium",
    green: "bg-green-light text-green font-bold",
    gray: "bg-[#b3c0d9] text-white font-semibold",
    red: "bg-red text-white font-semibold"
}

const tagSizeClasses = {
    sm: "text-[12px]/[12px] h-[22px] p-[5px_10px]",
    md: "text-[14px]/[100%] h-[25px] p-[5px_10px]"
}

const Tag = ({size = "sm", appearance = "ghost", href, children, className, ...props}: TagProps) => {
    return (
        <div className={cn("cursor-pointer inline-block rounded-[20px] text-center", tagAppearanceClasses[appearance], tagSizeClasses[size])}
        {...props}
        >
            {(href) ? <a href={href}>{children}</a> : <>{children}</>  }
        </div>
    )
}

export { Tag };