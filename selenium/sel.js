var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until
    //,
    //test = require('selenium-webdriver/testing');
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('nakama');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('nakama - Google Search'), 1000);
driver.sleep(1000);
/*test.after(function(){
  readline();
})*/
