import * as React from "react";
import Typography from "@mui/material/Typography";
import DataTable from "../components/DataTable";
import data from "../data.json";

const columns = [
  { id: "course", label: "Matière", minWidth: 220 },
  { id: "count", label: "Nombre de notes", minWidth: 160, align: "right" },
];

export default function Courses() {
  const rows = React.useMemo(() => {
    const map = new Map();

    data.forEach((x) => {
      const key = x.course;
      map.set(key, (map.get(key) || 0) + 1);
    });

    return Array.from(map.entries()).map(([course, count]) => ({
      id: course,
      course,
      count,
    }));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Cours
      </Typography>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
