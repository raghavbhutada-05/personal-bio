export default function Header() {
  return (
    <header className="py-2 text-center" style={{ background: 'linear-gradient(180deg, rgba(248,187,208,0.25), rgba(248,187,208,0))', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <img className="ganesha-logo mb-1" alt="Om Symbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Om_symbol.svg/1200px-Om_symbol.svg.png" style={{ width: '48px', height: '48px' }} />
        <h1 className="display-6 mb-0 name-title" style={{ fontSize: '2.2rem' }}>Raghav Bhutada</h1>
        <p className="mb-1 subtitle" style={{ fontSize: '0.95rem' }}>Personal Bio-Data</p>
      </div>
      <div className="border-lace"></div>
    </header>
  )
}


