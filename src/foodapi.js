import axios from 'axios'


const APP_KEY= "a2a4dec379be87aadd8fc1e5a402b117"
const APP_ID= "6eabbe72"

const baseurl= `https://api.edamam.com/search?`
//"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free

export const getFoodData = async(query) => {
    try{
        const {data}= await axios.get(baseurl) + `q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        return data;

    }catch(error){
        throw error;
    }
}