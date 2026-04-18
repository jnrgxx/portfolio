type Stackture = {
    category: string,
    tech: Array<string>
}

type StackProps = {
    readonly arr: Stackture[];
}

export default function Stack({ arr }: StackProps) {
    return (
        <>
            {arr.map((i) => (
                    <div className="mb-3" key={i.category}>
                        {/* Tech */}
                        <div className="font-dm-mono text-xs font-medium text-ink mb-1.5 flex items-center gap-1.5">
                            <span className="w-4 h-0.5 bg-acc inline-block"></span>
                            {i.category}
                        </div>
            
                        {}
            
                        {/* Stack */}
                        <div className="flex font-dm-mono text-xs text-muted">
                            
                            {i.tech.map((item) => (
                                <div key={item} className="bg-card px-3 py-1.5 border-[0.5px] border-bd m-0.5">
                                    {item}
                                </div>

                            ))}

                        </div>
                    </div>
                ))
            }
        </>

    )
}