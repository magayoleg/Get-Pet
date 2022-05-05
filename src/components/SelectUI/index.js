import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

import "./selectui.css";

export function SelectUI() {
  const [species, setSpecies] = useState("");

  const handleChange = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Тип животного</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={species}
          label="Тип животного"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Не выбрано</em>
          </MenuItem>
          <MenuItem value={"cat"}>Кошка</MenuItem>
          <MenuItem value={"dog"}>Собака</MenuItem>
          <MenuItem value={"rat"}>Мышь</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
