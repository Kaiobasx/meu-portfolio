export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="footer-accent">Kaio</span>. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
