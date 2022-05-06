import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PersonaIndividual } from "../component/personIndividual";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	//console.log(theid + "este es el params")
	return (
		
		<PersonaIndividual persona={theid} ></PersonaIndividual>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
