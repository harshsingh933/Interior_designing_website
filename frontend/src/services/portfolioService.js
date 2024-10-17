const portfolioService = {
    fetchPortfolio: async () => {
      const response = await fetch('/api/portfolio');
      return await response.json();
    }
  };
  
  export default portfolioService;
  