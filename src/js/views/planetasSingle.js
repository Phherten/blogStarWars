import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetIndividual } from "../component/planetIndividual";

export const PlanetSingle = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	//console.log(theid + "este es el params")
	return (
		
		<PlanetIndividual planeta={theid}></PlanetIndividual>
	);
};

PlanetSingle.propTypes = {
	match: PropTypes.object
};