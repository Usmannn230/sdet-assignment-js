const { test, expect } = require('@playwright/test');
const { getWeatherData } = require('../utils/apiUtils');

test.describe('Weather API Tests', () => {
  test('Verify Islamabad Temperature and Response Code', async ({ request }) => {
    const apiKey = process.env.OPENWEATHER_API_KEY || '2896f6a229d776e0853dc8fef59d2d32';
    const city = 'Islamabad';
    
    const response = await getWeatherData(request, city, apiKey);
    
    // Assert response code
    expect(response.status()).toBe(200);
    
    // Assert temperature exists
    const responseBody = await response.json();
    expect(responseBody.main.temp).toBeDefined();
    
    console.log(`Current temperature in ${city}: ${responseBody.main.temp}°K`);
  });
});