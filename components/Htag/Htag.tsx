import HtagProps from "./Htag.props";
import cn from "classnames";

const Htag = ({h, children, className, ...props}: HtagProps): JSX.Element => {
    switch (h) {
        case "1":
            return <h1 className={cn("text-[26px] font-medium", className)}{...props}>{children}</h1>;
        case "2":
            return <h2 className={cn("text-[22px] font-medium", className)}{...props}>{children}</h2>;    
        case "3":
            return <h3 className={cn("text-[20px] font-semibold", className)}{...props}>{children}</h3>;
        default:
            return <h1 className="text-red text-[26px] font-medium">Htag не предусматривает компонент с таким h</h1>;
    }
}

export { Htag };