import { useState } from "react";
import JourneyCard from "../Components/JourneyCard";
import { journeys } from "../data/portfolioData";

export default function Journey() { 

    const [page, setPage] = useState(0);

    const ITEMS_PER_PAGE = 4;

    const pages = [];

    for (let i = 0; i < journeys.length; i += ITEMS_PER_PAGE) {
        pages.push(journeys.slice(i, i + ITEMS_PER_PAGE));
    }

    const maxPage = pages.length - 1;

    return (
      <>
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">

                <h2 className="font-mono">
                    &gt; journey
                    <span className="text-zinc-400">
                        {" "}---experience
                    </span>
                </h2>

                <div className="flex">

                    <button
                        onClick={() => setPage(Math.max(page - 1, 0))}
                        className="border px-3 py-2"
                    >
                        ←
                    </button>

                    <button
                        onClick={() => setPage(Math.min(page + 1, maxPage))}
                        className="border border-l-0 px-3 py-2"
                    >
                        →
                    </button>

                </div>

            </div>

            {/* TIMELINE */}
            <div className="relative overflow-hidden">

                {/* horizontal line */}
                <div className="absolute top-1.5 left-0 w-full h-px bg-zinc-600" />

                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${page * 100}%)`,
                    }}
                >
                    {pages.map((group, index) => (
                        <div
                            key={index}
                            className="min-w-full flex justify-between"
                        >
                            {group.map((item) => (
                                <JourneyCard
                                    key={item.title}
                                    item={item}
                                />
                            ))}
                        </div>
                    ))}
                </div>

            </div>
      </>
    );

}