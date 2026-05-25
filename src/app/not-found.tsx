export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0f",
        color: "#f0f0f5",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>404</h1>
        <p style={{ color: "#9d9dac" }}>Página não encontrada</p>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            padding: "0.75rem 1.6rem",
            background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
            color: "#fff",
            borderRadius: "10px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
}
