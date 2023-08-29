export const getAllProducts = (token) => {
    const headers = new Headers();
    console.log(token)
    headers.append("Authorization", token);
  
    return fetch(`http://localhost:8080/books/getAllBook`, {
      headers: headers,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        return [];
      });
  };