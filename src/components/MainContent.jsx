function MainContent() {
  const now = new Date();

  const jours = [
    "Dimanche", "Lundi", "Mardi", "Mercredi",
    "Jeudi", "Vendredi", "Samedi"
  ];

  const mois = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const jour = jours[now.getDay()];
  const moisNom = mois[now.getMonth()];
  const annee = now.getFullYear();
  const heure = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const seconde = String(now.getSeconds()).padStart(2, "0");

  return (
    <main style={{ textAlign: "center", marginTop: "30px" }}>
      <p style={{ fontSize: "18px" }}>
        Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heure}:{minute}:{seconde}
      </p>
    </main>
  );
}

export default MainContent;
