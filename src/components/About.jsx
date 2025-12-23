import { useState } from "react";
import data from "../data.json";

// ✅ retourner un item aléatoire
function getRandomItem(list) {
  if (!Array.isArray(list) || list.length === 0) return null;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

// ✅ composant carte
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

      <p><strong>Étudiant :</strong> {item.student.firstname} {item.student.lastname}</p>
      <p><strong>ID Étudiant :</strong> {item.student.id}</p>
      <p><strong>Date :</strong> {item.date}</p>
      <p><strong>Note :</strong> {item.grade}</p>
      <p style={{ opacity: 0.7 }}>unique_id : {item.unique_id}</p>
    </div>
  );
}

export default function About() {
  const [selected, setSelected] = useState(() => getRandomItem(data));

  const handleRandom = () => {
    setSelected(getRandomItem(data));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>A propos</h2>
      <p style={{ opacity: 0.85 }}>
        Ici, on affiche un élément aléatoire depuis <code>data.json</code>.
      </p>

      <button
        onClick={handleRandom}
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer",
          background: "transparent",
          color: "white",
          marginTop: "10px",
        }}
      >
        Afficher un élément aléatoire
      </button>

      <ItemCard item={selected} />
    </div>
  );
}
