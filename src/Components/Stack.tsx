type Stackture = {
    category: string,
    tech: Array<string>
}

type StackProps = {
    readonly arr: Stackture[];
}

// Note: I didn't put the object of Stack here with the details because i want to re-use this in specific project page

export default function Stack({ arr }: StackProps) {
    return (
        <>
            {arr.map((i) => (
                    <div className="mb-3" key={i.category}>
                        {/* Tech */}
                        <div className="font-mono text-xs font-medium text-text-primary mb-1.5 flex items-center gap-1.5">
                            <span className="w-4 h-0.5 bg-acc inline-block"></span>
                            {i.category}
                        </div>
            
                        {}
            
                        {/* Stack */}
                        <div className="flex font-mono text-xs text-text-secondary">
                            
                            {i.tech.map((item) => (
                                <div key={item} className="bg-surface px-3 py-1.5 border-[0.5px] border-border m-0.5">
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