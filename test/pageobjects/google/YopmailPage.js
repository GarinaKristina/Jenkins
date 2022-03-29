const BasePage = require('./BasePage');

class YopmailPage extends BasePage {
  get buttonAccept() {
    return $('//button[@id="accept"]');
  }
  get buttonGeneraiteEmail() {
    return $('//b[contains(text(),"Случайный адрес электронной почты")]');
  }
  get areaWithEmail() {
    return $('//div[@id="egen"]');
  }
  get copyEmail() {
    return $('//button[@id="cprnd"]');
  }
  get emailEstimate() {
    return $('//*[@id="email_quote"]');
  }
  get lastName() {
    return $('//*[@id="input_446"]');
  }
  get okey() {
    return $('//*[@id="dialogContent_462"]/form/md-toolbar/h2');
  }
  get emailArea() {
    return $('//input[contains(@class, "ng-valid-email")]');
  }
  get sendEmail() {
    return $('//*[@aria-label="Send Email"]');
  }
  get buttonRefresh() {
    return $('//*[@id="refresh"]');
  }
  get buttonCheckEmail() {
    return $('//button[@onclick="egengo();"]');
  }
  get total() {
    return $('//*[normalize-space()="USD 4,026.13"]');
  }
  get total2() {
    return $('//td[contains(text(),"USD 4,026.13")]');
  }
  get message() {
    return $('//div[@class="lms"]');
  }
  get showpicture() {
    return $('//span[contains(text(),"Показать изображения")]');
  }
  get moreSize() {
    return $('//i[contains(text(),"")]');
  }
  get textArea() {
    return $('//tbody/tr[@valign="top"]/td[1]');
  }
  open() {
    super.open();
  }
}
module.exports = new YopmailPage();
