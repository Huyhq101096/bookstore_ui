export const getAllProducts = (token) => {
    return fetch(`http://localhost:8084/books/getAllBook`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        // console.log(response); // Console.log dữ liệu nhận được từ API
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        return [];
      });
  };
