"use client";
import { useEffect, useState, KeyboardEvent, KeyboardEventHandler } from "react";
import { RatingProps } from "./Rating.props";
import RatingIcon from "./Vector.svg";
import cn from "classnames";

const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    
    
    function changeRatingView (n: number){
        if(!isEditable) return;

        constructRating(n);
    }

    function changeRating(n: number) {
        if(!isEditable || !setRating) return;

        setRating(n);
    }

    function handleSpace(n: number, e: KeyboardEvent<SVGElement>) {
        if(!isEditable || !setRating) return;

        console.log(e.code);
        if(e.code === "Space") {
            setRating(n);
        }
    }

    function constructRating  (curRating: number) {
        const updatedArr = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span 
                    onMouseEnter={() => changeRatingView(i + 1)}
                    onMouseLeave={() => changeRatingView(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <RatingIcon className={cn("mr-[5px]", {
                        "fill-purple": i < curRating,
                        "cursor-pointer": isEditable
                    })}
                    
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i + 1, e)}
                    />
                </span>
            );
        });

        setRatingArray(updatedArr);
    };

    

    useEffect(() => {constructRating(rating)}, [rating]);

    return (
        <div className={cn("flex", className)}
        {...props}>
            {ratingArray.map((item, i) => <span key={i}>{item}</span> )}
        </div>
    )
}


export { Rating }