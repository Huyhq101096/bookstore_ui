export const getAllProducts = (token) => {
  const headers = new Headers();
  console.log(token)
  headers.append("Authorization", token);

  return fetch(`${URL}books/getAllBook`, {
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data from API:", error);
      return [];
    });
};


// import $ from 'jquery';

// export const getAllProducts = (token) => {
//   return $.ajax({
//     url: 'http://localhost:8080/books/getAllBook',
//     type: 'GET',
//     headers: {
//       'Authorization': token
//     },
//     dataType: 'json'
//   })
//   .done((data) => {
//     console.log(data)
//     return data;
//   })
//   .fail((error) => {
//     console.error('Error fetching data from API:', error);
//     return [];
//   });
// };
