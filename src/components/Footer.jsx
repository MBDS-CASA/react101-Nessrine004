function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px 0",
        marginTop: "auto",
        color: "#ffffffaa",
      }}
    >
      © {annee} - Bekri Nessrine, Tous droits réservés.
    </footer>
  );
}

export default Footer;
