import Typography from "@mui/material/Typography";
import DataTable from "../components/DataTable";
import data from "../data.json";

const columns = [
  { id: "student", label: "Étudiant", minWidth: 240 },
  { id: "course", label: "Matière", minWidth: 180 },
  { id: "date", label: "Date", minWidth: 130 },
  { id: "grade", label: "Note", minWidth: 90, align: "right" },
];

export default function Grades() {
  const rows = data.map((x) => ({
    id: x.unique_id,
    student: `${x.student.firstname} ${x.student.lastname} (${x.student.id})`,
    course: x.course,
    date: x.date,
    grade: x.grade,
  }));

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Notes
      </Typography>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
