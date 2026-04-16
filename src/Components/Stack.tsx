type Stackture = {
    category: string,
    tech: Array<string>
}

type StackProps = {
    arr: Stackture[];
}

export default function Stack({ arr }: StackProps) {
    return (
        <>
            {arr.map((i) => (
                    <div className="mb-1.5" key={i.category}>
                        {/* Tech */}
                        <div className="font-dm-mono text-xxs font-medium text-ink mb-1.5 flex items-center gap-1.5">
                            <span className="w-3 h-0.5 bg-acc inline-block"></span>
                            {i.category}
                        </div>
            
                        {}
            
                        {/* Stack */}
                        <div className="flex font-dm-mono text-xxs text-muted">
                            
                            {i.tech.map((item) => (
                                <div className="bg-card px-2.5 py-1 border-[0.5px] border-bd m-0.5">
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