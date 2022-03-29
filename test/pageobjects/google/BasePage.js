module.exports = class BasePage {
  open() {
    return browser.url('https://cloud.google.com/');
  }
};
