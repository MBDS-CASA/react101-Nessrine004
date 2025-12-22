function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <img
        src="/app_logo.webp"
        alt="Logo de la formation"
        style={{
          width: "220px",   
          marginBottom: "20px"
        }}
      />
      <h1>Introduction à React</h1>
      <h3>À la découverte des premières notions de React</h3>
    </header>
  );
}
export default Header;
