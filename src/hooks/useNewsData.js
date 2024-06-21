import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = "3570987c3a9d49cd9be308fb99fbc0e0";
        const apiUrl = `https://newsapi.org/v2/everything?apikey=${apiKey}`;
        const searchQuery = searchTerm || category || "news"; 
        const url = `${apiUrl}&q=${searchQuery}`;
        const response = await fetch(url);
        const data = await response.json();
        
        setNewsData(data.articles)
        console.log(data.articles)
        setLoading(false);
        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;
