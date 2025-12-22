import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import data from "./data.json";

const MENU_ITEMS = ["Notes", "Etudiants", "Matières", "A propos"];

// ✅ 1) Fonction : retourner un item aléatoire de la liste
function getRandomItem(list) {
  if (!Array.isArray(list) || list.length === 0) return null;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

// ✅ 2) Composant : afficher un élément du tableau
function ItemCard({ item }) {
  if (!item) return <p style={{ textAlign: "center" }}>Aucun élément à afficher.</p>;

  return (
    <div
      style={{
        margin: "20px auto",
        padding: "16px",
        maxWidth: "600px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.15)",
        textAlign: "left",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{item.course}</h3>

      <p>
        <strong>Étudiant :</strong> {item.student.firstname} {item.student.lastname}
      </p>
      <p>
        <strong>ID Étudiant :</strong> {item.student.id}
      </p>
      <p>
        <strong>Date :</strong> {item.date}
      </p>
      <p>
        <strong>Note :</strong> {item.grade}
      </p>
      <p style={{ opacity: 0.7 }}>unique_id : {item.unique_id}</p>
    </div>
  );
}

// ✅ Menu (liste + item actif)
function Menu({ activeItem, onSelect }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        gap: "12px",
        padding: "12px 20px",
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
      }}
    >
      {MENU_ITEMS.map((item) => {
        const isActive = item === activeItem;

        return (
          <button
            key={item}
            onClick={() => onSelect(item)}
            style={{
              padding: "8px 12px",
              borderRadius: "10px",
              border: isActive
                ? "2px solid white"
                : "1px solid rgba(255,255,255,0.2)",
              background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: isActive ? 700 : 500,
            }}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
}

// ✅ Contenu dédié selon le menu sélectionné
function MenuContent({ activeItem }) {
  return (
    <section style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ marginBottom: "8px" }}>{activeItem}</h2>
      <p>Contenu : {activeItem}</p>
    </section>
  );
}

export default function App() {
  const [selected, setSelected] = useState(() => getRandomItem(data));
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);

  const handleRandom = () => {
    setSelected(getRandomItem(data));
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ✅ MENU EN HAUT */}
      <Menu activeItem={activeMenu} onSelect={setActiveMenu} />

      {/* HEADER */}
      <Header />

      {/* CONTENU PRINCIPAL */}
      <div style={{ flex: 1 }}>
        <MainContent />

        {/* ✅ CONTENU LIÉ AU MENU */}
        <MenuContent activeItem={activeMenu} />

        {/* ✅ DATA.JSON + RANDOM */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          <button
            onClick={handleRandom}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
            }}
          >
            Afficher un élément aléatoire
          </button>

          <ItemCard item={selected} />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
