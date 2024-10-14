const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "fat cat";
const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;


console.log("API Key:", process.env.REACT_APP_API_KEY);

export const fetchGiphyData = async() => {
    try{
        const response = await fetch(GIPHY_URL);
        if(!response.ok){
            throw new Error("failed to fetch data")

        }
        const gifdata = await response.json();

        return gifdata.data;

    } catch(error){
        console.error('Error fetching data', error);
        return [];
    }
}