const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			persons:[],
			planets:[],
			especies:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: async () => {
				await fetch("https://swapi.dev/api/people")
				.then(response=>response.json())
				.then(data=>{console.log(data.results)
				setStore({persons:data.results})})
				.catch(error=>console.log("algo fallo con las personas"))

			},
			loadPlanet: async () => {
				await fetch("https://swapi.dev/api/planets/")
				.then (response=>response.json())
				.then(data=>{console.log(data.results)
				setStore({planets:data.results})
				})
				.catch(error=>console.log("algo pasa con los planetas"))

			},



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
