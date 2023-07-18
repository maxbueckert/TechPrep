export default async function getChatGptFunction(difficulty, domain) {
    let url = 'https://wfyamhb23c.execute-api.us-west-1.amazonaws.com/dev/helloworld?domain=' + domain + "&difficulty=" + difficulty;

    const response = await fetch(url);
  
    // Make sure the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    // Parse the response as JSON
    const data = await response.json();
    console.log(typeof data)
 
    return data
  }
  