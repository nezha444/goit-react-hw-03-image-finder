import axios from 'axios';

export const getImg = async (query, page) => {
  const data = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=36273438-7ad8bc87a6816fbd3e66d9cf9&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
