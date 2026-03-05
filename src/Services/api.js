
export default function api() {
  const search = async (query) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  return {
    search,
  };
}
