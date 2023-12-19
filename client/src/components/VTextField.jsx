import React from "react";
import { TextField } from "@mui/material";
import { observer } from "mobx-react-lite";

function VTextField({state, setState, min, max}) {

	return <TextField 							
		label="Введите значение"
		variant="outlined"
		type="number"
		value={state}
		onChange={(e) => setState(+e.target.value)}
		size="small"
		InputLabelProps={{
			shrink: true,
		}}
		min={min}
		max={max}
	/>
}
export default observer(VTextField);