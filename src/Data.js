import Axios from "axios"


async function GiphyData(query){

const response   = await Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=8KqltzjH1v8iShVGfUNTcBuPVPAqa7fv&limit=10&q=${query}`)

return (response.data.data)

}
export default GiphyData;