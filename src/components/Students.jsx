import * as React from "react";
import Typography from "@mui/material/Typography";
import DataTable from "../components/DataTable";
import data from "../data.json";

const columns = [
  { id: "studentId", label: "ID", minWidth: 80 },
  { id: "firstname", label: "Prénom", minWidth: 160 },
  { id: "lastname", label: "Nom", minWidth: 160 },
];

export default function Students() {
  const rows = React.useMemo(() => {
    const map = new Map();

    data.forEach((x) => {
      const s = x.student;
      if (!map.has(s.id)) {
        map.set(s.id, {
          id: s.id, // clé unique
          studentId: s.id,
          firstname: s.firstname,
          lastname: s.lastname,
        });
      }
    });

    return Array.from(map.values());
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Étudiants
      </Typography>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
