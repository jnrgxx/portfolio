import React, { useState, useEffect } from "react";

interface ClockProps {
    timezone: string;
}

export default function Clock({ timezone }: ClockProps) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <span>{formattedTime}</span>
    );
}