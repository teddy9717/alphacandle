
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '40px' }}>
      <h1 style={{ fontSize: '48px' }}>AlphaCandle</h1>
      <h3 style={{ marginTop: '10px', color: '#888' }}>Precision Signals. Alpha Gains.</h3>
      <p style={{ marginTop: '30px', fontSize: '18px', maxWidth: '700px' }}>
        Welcome to AlphaCandle, the premium crypto signal platform.
        We provide high-accuracy signals for Binance altcoins based on momentum, trend reversals, and volume surges.
      </p>
      <a href="/plans" style={{
        display: 'inline-block',
        marginTop: '40px',
        backgroundColor: '#111',
        color: '#fff',
        padding: '12px 30px',
        fontSize: '18px',
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        View Plans →
      </a>
    </div>
  );
}
