import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import data from "./data.json";

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

      <p style={{ margin: "6px 0" }}>
        <strong>Étudiant :</strong> {item.student.firstname} {item.student.lastname}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>ID Étudiant :</strong> {item.student.id}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Date :</strong> {item.date}
      </p>

      <p style={{ margin: "6px 0" }}>
        <strong>Note :</strong> {item.grade}
      </p>

      <p style={{ margin: "6px 0", opacity: 0.7 }}>
        unique_id : {item.unique_id}
      </p>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(() => getRandomItem(data));

  const handleRandom = () => {
    setSelected(getRandomItem(data));
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      {/* ✅ Ici on garde ton MainContent et on ajoute la partie data.json */}
      <div style={{ flex: 1 }}>
        <MainContent />

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

      <Footer />
    </div>
  );
}
