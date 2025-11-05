export default function Petals() {
  const petals = new Array(16).fill(0)
  return (
    <div className="petals" aria-hidden>
      {petals.map((_, i) => (
        <span key={i} style={{ left: `${(i * 100) / petals.length}%`, animationDelay: `${i * 0.6}s` }} />
      ))}
    </div>
  )
}


