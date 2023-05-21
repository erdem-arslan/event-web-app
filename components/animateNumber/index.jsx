"use client"
import React, { useState, useEffect } from "react";

const AnimateNumber = ({ number, delay = 50 }) =>
{
    const [count, setCount] = useState(0);

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            if (count < number)
            {
                setCount(count + 1);
            } else
            {
                clearInterval(interval);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [count, number]);

    return <span className="text-[#7F7DF3] text-6xl font-bold font-[Jost] md:text-8xl">{count}</span>;
};

export default AnimateNumber;