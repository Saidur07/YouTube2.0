import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// export const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  params: {
    maxResults: 500,
    regionCode: "BD",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // "X-RapidAPI-Key": "5f936823d3msh3493d962f8b7082p129af3jsn788e704debec",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    return error;
  }
};
