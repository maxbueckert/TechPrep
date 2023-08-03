import axios from 'axios';

export default async function getChatGptFunction(difficulty, domain) {
    let url = 'https://wfyamhb23c.execute-api.us-west-1.amazonaws.com/dev/helloworld?domain=' + domain + "&difficulty=" + difficulty;

    try {
        const response = await axios.get(url);
  
        // Make sure the request was successful
        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // response.data contains the response payload
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



