import { certificates } from '../data/portfolioData'



export default function CertificatesPage() {
    return (
        <>
            {/* Certificates */}
            {certificates.map(c =>
                <a key={c.url} href={c.url} target="_blank" className="flex justify-between items-center bg-card px-3 py-2.5 border-[0.5px] border-bd mb-0">
                    <div className="flex flex-col items-start">
                        <h2 className="text-xs">{c.name}</h2>
                        <span className="font-dm-mono text-muted mt-0.5 text-xxs">{c.company} · {c.source}</span>
                    </div>

                    <div className="h-fit py-1 px-3 leading-none font-dm-mono text-xxs text-acc bg-abg border-[0.5px] border-abr">verified ✓</div>
                </a>
            )}
        </>
    )
  }