import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [males, setMales] = useState(0);
  useEffect(() => {
    apiData();
  }, []);
  function apiData() {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setRows(result);
          setColumns(
            Object.keys(result[0]).map((i) => {
              return {
                field: i,
                headerName: i.toUpperCase(),
                width: i === "email" ? 320 : 270,
              };
            })
          );
          setMales(result.filter((i) => i.gender === "male").length);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <div className="App">
      <div
        style={{ height: 700, width: "80%", margin: "auto", marginTop: "20px" }}
      >
        <div style={{marginBottom:'10px'}}>
          <Stack direction="row" spacing={1}>
            <Chip icon={<FemaleIcon/>} label={[<h3>{males} Male</h3>]} />
            <Chip icon={<MaleIcon/>} label={[<h3>{rows.length-males} Female</h3>]}  />
          </Stack>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
}

export default App;
