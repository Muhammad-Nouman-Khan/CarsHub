export async function fetchCars() {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera";

  const headers = {
    "x-rapidapi-key": "c5c2cd5ae2msh9682779b9f6a5cbp119d66jsnc78aa2419e3e",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(url, {
    headers: headers,
  });

  const result = response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
