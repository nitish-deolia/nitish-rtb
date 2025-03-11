const API_KEY = import.meta.env.VITE_IMAGE_API_KEY_UNSPLASH;
const API_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`;

const fetchImages = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch images");
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export default fetchImages;