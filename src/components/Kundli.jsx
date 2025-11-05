import { useReveal } from '../utils/useReveal.js'

export default function Kundli() {
  const ref = useReveal()
  return (
    <div className="reveal" ref={ref}>
      <h2 className="section-title text-center">Kundli</h2>
      <div className="soft-card blossom-border p-3 mt-3">
        <div className="text-center">
          <img src="/assets/kundli.svg" alt="Kundli Chart" style={{ maxWidth: '480px', width: '100%', borderRadius: '12px', border: '1px solid rgba(233,30,99,0.2)' }} />
          <div className="small text-muted mt-2">Sample Kundli chart (placeholder)</div>
        </div>
      </div>
    </div>
  )
}


