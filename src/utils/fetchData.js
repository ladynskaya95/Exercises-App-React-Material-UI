export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": 'e934568380msh95eb8737caac126p1e9d9ejsn1e6e07dc278b',
  },
};

// export const youtubeOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
//     "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
//   },
// };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
  
};
