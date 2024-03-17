import { FooterProps } from "./Footer.props";
import { P } from "..";
import cn from "classnames";

const Footer =  ({ className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer
            className={cn("bg-purple p-[25px_32px] grid grid-cols-1 gap-[10px_40px] text-white font-medium sm:grid-cols-[1fr_auto_auto] ", className)}
            {...props}
        >
            <P size="md">OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</P>
            <a href="#" className="hover:text-gray" target="_blank">
                <P size="md">
                    Пользовательское соглашение
                </P>
            </a>
            <a href="#" className="hover:text-gray" target="_blank">
                <P size="md">
                    Политика конфиденциальности
                </P>
            </a>
        </footer>
    )
}

export { Footer }