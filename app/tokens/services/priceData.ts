// Mock data generator for demonstration
export const generateMockPriceData = (days: number = 7) => {
  const data = [];
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const startPrice = 0.0206;
  
  for (let i = days; i >= 0; i--) {
    const time = new Date(now.getTime() - (i * msPerDay));
    const randomChange = (Math.random() - 0.5) * 0.001;
    const value = startPrice + randomChange;
    
    data.push({
      time: time.toISOString().split('T')[0],
      value: parseFloat(value.toFixed(6)),
    });
  }
  
  return data;
};

// In a real application, you would fetch data from an API
export const fetchPriceData = async () => {
  // For demonstration, we're using mock data
  // Replace this with actual API call in production
  return generateMockPriceData();
};

// Function to format WebSocket updates
export const formatWebSocketUpdate = (price: number) => {
  return {
    time: new Date().toISOString().split('T')[0],
    value: price,
  };
}; 