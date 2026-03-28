const { test, expect } = require('@playwright/test');

test.describe('Dashboard IoT', () => {

  test('deve carregar a página inicial e exibir os títulos corretos', async ({ page }) => {
    // Acessa a raiz (que vai apontar para http://localhost:3000 baseado no playwright.config.js)
    await page.goto('/');

    // Verifica se o título da aba está correto
    await expect(page).toHaveTitle(/PI-5 Wearable IoT Dashboard/);

    // Verifica se o título principal está visível
    const mainHeading = page.locator('h1', { hasText: 'Dashboard IoT ESP32 - Frames e Geolocalização' });
    await expect(mainHeading).toBeVisible();

    // Verifica se as seções de frames e localizações estão presentes
    await expect(page.locator('h2', { hasText: 'Frames Recebidos' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Geolocalização' })).toBeVisible();
    
    // Verifica se as divs contêiner estão presentes
    //await expect(page.locator('#frames')).toBeVisible();
    //await expect(page.locator('#locations')).toBeVisible();
  });

});
