fetch("https://imdb8.p.rapidapi.com/auto-complete?q=resident%20evil", {
	method: "GET",
	"headers": {
		"X-RapidAPI-Key": "d75844619emshefedb59de6d74cap134172jsnc22b3d6b55c6",
		"X-RapidAPI-Host": "imdb8.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
	// console.log(data) 
	 const arraymovies = data.d
	 arraymovies.map( (element) => {
		//console.log(element)
		const title = element.l
		const image = element.i.imageUrl
		const cast = element.s 

		const poster = `
			<div>
				<img src="${image}" />
				<h2>${title}</h2>
				<small>${cast}</small>
			</div>
			`
			document.getElementById('container').innerHTML += poster
	 })
})
.catch(err => {
	console.error(err);
});