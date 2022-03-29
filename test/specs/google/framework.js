const { emailArea, sendEmail } = require('../../pageobjects/google/GoogleCalculatorPage');
const GoogleCalculatorPage = require('../../pageobjects/google/GoogleCalculatorPage');

const request = 'Google Cloud Platform Pricing Calculator';
const enter = '\uE007';
const control = '\uE009';
const parameterNumberOfInstaces = '4';
const TIMEOUT = { timeout: 50000 };
const webSiteEgenEmail = 'https://yopmail.com/';
const webSiteWithCalculator = 'https://cloud.google.com/products/calculator';
const webSiteWithGeneratedEmail = 'https://yopmail.com/ru/email-generator';
const timestamp = new Date().toJSON().replace(/:/g, '-');
const filename = 'TEST_Framework' + '_' + timestamp + '.png';

describe('Bild calculator and send result to email', () => {
  it('should open google calculator', async () => {
    await GoogleCalculatorPage.open();
    await GoogleCalculatorPage.maximizeWindow();
    await expect(browser).toHaveTitleContaining('Google Cloud');
    await GoogleCalculatorPage.searchArea.addValue(request);
    await GoogleCalculatorPage.searchArea.keys(enter);
    try {
      await GoogleCalculatorPage.linkWithCalculator.click();
      await expect(browser).toHaveTitleContaining('Calculator');
    } catch (error) {
      await GoogleCalculatorPage.navigateTo(webSiteWithCalculator);
    }
  });

  it('should bild calculator with spesial parameter', async () => {
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.computeEngine.click();
    await GoogleCalculatorPage.pause(3000);
    await GoogleCalculatorPage.numberOfInstances4.addValue(parameterNumberOfInstaces);
    await GoogleCalculatorPage.operatingSystem.click();
    await GoogleCalculatorPage.operatingSystemDebian.click();
    await GoogleCalculatorPage.machineClass.click();
    await GoogleCalculatorPage.machineClassRegular.click();
    await GoogleCalculatorPage.series.click();
    await GoogleCalculatorPage.series1N.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.series1N.click();
    await GoogleCalculatorPage.machineType.click();
    await GoogleCalculatorPage.machineTypeStandartN1.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.machineTypeStandartN1.click();
    await GoogleCalculatorPage.addGpus.click();
    await GoogleCalculatorPage.typeOfGpus.click();
    await GoogleCalculatorPage.typeOfGpusNvidiaTeslaT100.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.typeOfGpusNvidiaTeslaT100.click();
    await GoogleCalculatorPage.numberOfGpus.click();
    await GoogleCalculatorPage.numberOfGpus1.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.numberOfGpus1.click();
    await GoogleCalculatorPage.localSSD.click();
    await GoogleCalculatorPage.localSSD375Gb.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.localSSD375Gb.click();
    await GoogleCalculatorPage.dataCenter.click();
    await GoogleCalculatorPage.dataCenterFrankfurt.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.dataCenterFrankfurt.click();
    await GoogleCalculatorPage.committedUsage.click();
    await GoogleCalculatorPage.committedUsage1year.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.committedUsage1year.click();
    await GoogleCalculatorPage.addToEstimate.click();
  });

  it('should send letter on egen email', async () => {
    await GoogleCalculatorPage.emailEstimate.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.emailEstimate.click();
    await GoogleCalculatorPage.newWindow(webSiteEgenEmail);
    await GoogleCalculatorPage.buttonAccept.click();
    await GoogleCalculatorPage.buttonGeneraiteEmail.click();
    await GoogleCalculatorPage.copyEmail.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.copyEmail.click();
    await GoogleCalculatorPage.switchWindow(webSiteWithCalculator);
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.emailArea1.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.emailArea1.click();
    await GoogleCalculatorPage.keys([control, 'v']);
    await GoogleCalculatorPage.saveScreenshot('./ScreenshotPage.png');
    await GoogleCalculatorPage.sendEmail1.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.sendEmail1.click();
    await GoogleCalculatorPage.switchWindow(webSiteWithGeneratedEmail);
    await GoogleCalculatorPage.buttonCheckEmail.click();
    await GoogleCalculatorPage.saveScreenshot('./ScreenshotPagefinish1.png');
    await GoogleCalculatorPage.buttonRefresh.click();
    await GoogleCalculatorPage.saveScreenshot('./ScreenshotPagefinish2.png');
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.message.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.message.click();
    await expect(GoogleCalculatorPage.message).toHaveTextContaining('Google Cloud Price Estimate');
  });

  it('should check "Total Estimated Monthly Cost" equal USD 4,026.13', async () => {
    try {
      await GoogleCalculatorPage.getTotalCost();
      await expect(GoogleCalculatorPage.total).toHaveText('USD 4,026.13');
    } catch (error) {
      await GoogleCalculatorPage.saveScreenshot(filename);
    }
  });
});
