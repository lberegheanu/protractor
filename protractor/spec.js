describe('Protractor Demo App', function() {
    it('should have a title', function () {
        browser.get('http://bhdtest.endava.com/petclinic/welcome');

        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[2]/a')).click();
        browser.sleep(2000);

        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[2]/ul/li[2]/a')).click();
        browser.sleep(2000);
    });
            //ADD A NEW OWNER

    it ('Protractor: Add new owner', ()=> {

       element(by.id('firstName')).sendKeys('Laurentiu');

        element(by.id('lastName')).sendKeys('Beregheanu');

        element(by.xpath('//*[@id="address"]')).sendKeys('Pitesti').

        element(by.xpath('//*[@id="city"]')).sendKeys('Arges');

        element(by.xpath('//*[@id="telephone"]')).sendKeys('0756333333');

        element(by.xpath('/html/body/app-root/app-owner-add/div/div/form/div[7]/div/button[2]')).click();
        browser.sleep(2000);
});
    it('should have a title', function () {
        browser.get('http://bhdtest.endava.com/petclinic/welcome');

        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[3]/a')).click();
        browser.sleep(2000);

        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[3]/ul/li[2]/a')).click();
        browser.sleep(2000);
    });
            //ADD A NEW VET

    it ('Protractor: Add new vet', ()=> {

        element(by.id('firstName')).sendKeys('Laurentiu');
        element(by.id('lastName')).sendKeys('Beregheanu');
        element(by.xpath("//*[@id=\"specialties\"]")).click();
        element(by.xpath('//*[@id="specialties"]/option[1]')).click();
        element(by.xpath('//*[@id="vet"]/div[5]/div/button[2]')).click();
        browser.sleep(5000);

        //EDIT VET

        element(by.xpath("//*[@id=\"vets\"]/tbody/tr[1]/td[3]/button[1]")).click();
        element(by.xpath("//*[@id=\"firstName\"]")).clear();
        element(by.xpath("//*[@id=\"firstName\"]")).sendKeys("Laurentiu");
        element(by.xpath("//*[@id=\"vet_form\"]/div[5]/div/button[2]")).click();
        browser.sleep(2000);

        //DELETE VET

        element(by.xpath("//*[@id=\"vets\"]/tbody/tr[1]/td[3]/button[2]")).click();


    });

    it('should have a title', function () {
        browser.get('http://bhdtest.endava.com/petclinic/welcome');

        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[4]/a')).click();
        browser.sleep(2000);
        element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]")).click();
    });

        //ADD NEW PET

    it ('Protractor: Add new pet', ()=> {


        element(by.id('name')).sendKeys('brontozaur');
        element(by.xpath('//*[@id="pettype"]/div[2]/div/button')).click();
        browser.sleep(2000);

        //EDIT PET

        element(by.xpath("//*[@id=\"pettypes\"]/tbody/tr[1]/td[2]/button[1]")).click();
        element(by.xpath("//*[@id=\"name\"]")).clear();
        element(by.xpath("//*[@id=\"name\"]")).sendKeys("rat");
        element(by.xpath("//*[@id=\"pettype\"]/div[2]/div/button[1]")).click();
        browser.sleep(2000);

        //DELETE PET

        element(by.xpath("//*[@id=\"pettypes\"]/tbody/tr[1]/td[2]/button[2]")).click();
    });

    it('should have a title', function () {
        browser.get('http://bhdtest.endava.com/petclinic/welcome');

        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[5]/a/span[2]')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app-root/app-specialty-list/div/div/div/button[2]')).click();
        browser.sleep(2000);
    });

        //ADD SPECIALTY

    it ('Protractor: Add new spec', ()=> {

        element(by.xpath('//*[@id="name"]')).sendKeys('neurology');
        element(by.xpath("//*[@id=\"specialty\"]/div[2]/div/button")).click();
        browser.sleep(2000);

        //EDIT SPECIALTY

        element(by.xpath("//*[@id=\"specialties\"]/tbody/tr[1]/td[2]/button[1]")).click();
        element(by.xpath("//*[@id=\"name\"]")).clear();
        element(by.xpath('//*[@id="name"]')).sendKeys('NewNeurology');
        element(by.xpath("//*[@id=\"specialty\"]/div[2]/div/button[1]")).click();
        browser.sleep(2000);

        //DELETE SPEC

        element(by.xpath("//*[@id=\"specialties\"]/tbody/tr[2]/td[2]/button[2]")).click();

 });
});
