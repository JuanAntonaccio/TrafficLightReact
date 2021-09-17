import React, { useState } from "react";

const Semaforo = () => {
	const [prendo, setPrendo] = useState(0);

	return (
		<div className="container">
			<div
				className="btn btn-danger"
				onClick={() => {
					setPrendo(1);
				}}></div>
			<div
				className="btn btn-warning"
				onClick={() => {
					setPrendo(2);
				}}></div>
			<div
				className="btn btn-succsess"
				onClick={() => {
					setPrendo(3);
				}}></div>
		</div>
	);
};

export default Semaforo;
