import axios from 'axios';

const url = 'https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c2cbae682msh356997b1003e947p19d0d8jsneb481601efb1',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

{

}

export function GameInfo() {
    return (
        <>
            <h1 id="game-title">Placeholder</h1>
            <p id="release-year">Placeholder</p>
        </>
    );
}