const API_KEY = process.env.API_KEY;
const GIPHY_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12`;


export const fetchGiphyData = async() => {
    try{
        const response = await fetch(GIPHY_URL);
        if(!response.ok){
            throw new Error("failed to fetch data")

        }
        const data = await response.json();
        return data.data;
    } catch(error){
        console.error('Error fetching data', error);
    }
}