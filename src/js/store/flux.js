const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fotos : [
				"https://elcomercio.pe/resizer/Eq-puOe0SLcf7RASNVgPzE-BDTM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg",
				"https://wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po-1200x720.jpg",
				"https://s1.eestatic.com/2017/06/29/cultura/cine/star_wars-george_lucas-peliculas_227488145_37888495_1706x960.jpg",
				"https://media.vandalsports.com/i/640x360/11-2020/202011910389_1.jpg",
				"https://img.europapress.es/fotoweb/fotonoticia_20170807115025_420.jpg",
				"https://sm.askmen.com/askmen_in/topten/o/owen-lars/owen-lars_qt6s.jpg",
				"https://espanol.news24viral.com/wp-content/uploads/2022/02/1644185934_339_Ya-hemos-perdido-demasiados-actores-de-Star-Wars.jpg",
				"https://cdn-3.expansion.mx/dims4/default/8725a30/2147483647/strip/true/crop/800x420+0+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F3e%2F7e%2F73870b3249209a6e32e4948ee938%2Fdroide-star-wars-1.jpg",
				"https://elglado.files.wordpress.com/2015/05/biggs-darklighter.png",
				"https://sm.ign.com/ign_es/gallery/o/obi-wans-g/obi-wans-greatest-moments_u1hg.jpg"
			],
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
				setStore({planets:data.results})})
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
