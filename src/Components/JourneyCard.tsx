import type { JourneyItem } from "../data/portfolioData";
import { journeys } from "../data/portfolioData";

interface Props {
    item: JourneyItem;
}

export default function JourneyCard({ item }: Props) {
    return (
        <div className="w-52 flex-shrink-0 font-mono">

            {/* timeline circle */}
            <div className="relative h-8">
                <div className="absolute top-0 left-0
                    w-3 h-3
                    rounded-full
                    border border-zinc-400
                    bg-background" />
            </div>

            <p className="font-mono font-semibold text-green-500 text-sm">
                {item.year}
            </p>

            <h3 className="font-semibold text-base">{item.title}</h3>

            <p className="text-sm text-zinc-400">
                {item.subtitle}
            </p>

            <p className="mt-3 text-sm text-zinc-500 text-left">
                {item.description}
            </p>

        </div>
    );
}