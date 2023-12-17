import React from "react";
import { TextField } from "@mui/material";

function VTextField({state, setState}) {
	return <TextField 							
		label="Введите значени"
		variant="outlined"
		type="number"
		value={state}
		onChange={(e) => setState(+e.target.value)}
		size="small"
		 />
}
export default VTextField;