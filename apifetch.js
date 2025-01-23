const https = require('https');

async function fetchData(apiUrl) {
  try {
    const data = await new Promise((resolve, reject) => {
      https.get(apiUrl, (response) => {
        let body = '';

        response.on('data', (chunk) => {
          body += chunk;
        });

        response.on('end', () => {
          resolve(JSON.parse(body));
        });
        
      }).on('error', (err) => {
        reject(err);
      });
    });

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts");
