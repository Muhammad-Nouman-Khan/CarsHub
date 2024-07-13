export async function fetchCars() {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

  const headers = {
    'x-rapidapi-key': 'c5c2cd5ae2msh9682779b9f6a5cbp119d66jsnc78aa2419e3e',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(url, {
    headers: headers,
  });

  const result = response.json();

  return result;
}
