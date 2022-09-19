import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import OnePlayer from "./Pages/OnePlayer";
import TwoPlayer from "./Pages/TwoPlayer";
import SelectPage from "./Pages/SelectPage";

export default function Routes() {
	return (
		<BrowserRouter>
			<RouterRoutes>
				<Route exact path="/" element={<SelectPage />} />
				<Route exact path="/oneplayer" element={<OnePlayer />} />
				<Route exact path="/twoplayer" element={<TwoPlayer />} />
			</RouterRoutes>
		</BrowserRouter>
	);
}
