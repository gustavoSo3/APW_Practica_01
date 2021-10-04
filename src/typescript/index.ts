const apiURL = "https://newsapi.org/v2/everything"
const apiKey = '099ae17ecfff453186a97b582a8498d8'

function resetTextInput(input){
	input.value = ""
}

const searchInput = document.getElementById('search-input');
resetTextInput(searchInput);
const searchButton = document.getElementById('search-button');

//@ts-expect-error
async function buttonPressed() {
	//@ts-expect-error
	const text = searchInput.value;
	console.log(text);
	const response = await getNews(text);
	console.log(response);
	resetTextInput(searchInput);

	updateNews(response.articles);
}

searchButton.addEventListener('click', async ()=> buttonPressed());

async function getNews(query:string) {
	let requestURL: string
	if(query.length > 0){
		requestURL = apiURL + '?q=' + query
	} else {
		alert("You must search something");
		return;
	}
	const response = await fetch(requestURL, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'X-Api-Key': apiKey
		}
	})
	return response.json();
}

function updateNews(news: []){
	//@ts-expect-error
	const template = Handlebars.templates.news;
	document.getElementById('news-container').innerHTML = template({news:news})
}