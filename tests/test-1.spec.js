import { test, expect } from '@playwright/test';

test('valid-login', async ({ page }) => {
    //login to planning system
    await page.pause ();
  await page.goto('http://10.24.105.84:4200/account/login');
  await page.getByPlaceholder('User name or email').click();
  await page.getByPlaceholder('User name or email').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123qwe');
  await page.getByRole('button', { name: 'Log in' }).click();

   // Expect a link "to contain" a substring.
   await expect(page).toHaveURL(/.*business-form/);
   
});

test('invalid-login', async ({ page }) => {
    //login to planning system

  await page.goto('http://10.24.105.84:4200/account/login');
  await page.getByPlaceholder('User name or email').click();
  await page.getByPlaceholder('User name or email').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12344qwe');
  await page.getByRole('button', { name: 'Log in' }).click();

   // Expect a title "to contain" a substring.

  const locator = page.locator('.swal2-title');
  await expect(locator).toHaveText(/Login failed!/);

  
   
});

test('add-objective', async ({ page }) => {
  //login to planning system

  await page.goto('http://10.24.105.84:4200/app/objective');
  await page.getByPlaceholder('User name or email').click();
  await page.getByPlaceholder('User name or email').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123qwe');
  await page.getByRole('button', { name: 'Log in' }).click();

//add new aobjective
  await page.getByRole('button', { name: 'Finance' }).click();
  await page.getByText('Add New Objective').click();
  await page.getByPlaceholder('Objective Name').click();
  await page.getByPlaceholder('Objective Name').fill('test playweright');
  await page.locator('div').filter({ hasText: /^Interval$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Year' }).click();
  await page.getByPlaceholder('mmm yyyy').first().click();
  await page.getByText('February').click();
  await page.locator('ng-select').filter({ hasText: 'Business Units' }).getByRole('textbox').click();
  await page.getByLabel('Options list').getByText('Group').click();
  await page.getByText('Add Assignee').click();
  await page.locator('#userName').click();
  await page.locator('#userName').fill('morad khaled');
  await page.getByText('Morad Khaled Morad Mohamed').click();
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByLabel('Finance').locator('ng-select').filter({ hasText: 'Category' }).locator('span').first().click();
  await page.getByRole('option', { name: 'Outcome' }).click();
  await page.getByRole('button', { name: 'Save & Send' }).click();

  // waits for 2 seconds
    await page.waitForTimeout(2000); 

  //open function
   await page.getByRole('button', { name: 'Finance' }).click();

  //expect adding a new objective

  const locator = page.locator('//*[@id="cdk-accordion-child-7"]/div');
  await expect(locator).toHaveText(/test playweright/);


});

test('edit-role', async ({ page }) => {


  await page.goto('http://10.24.105.84:4200/app/roles');
  await page.getByPlaceholder('User name or email').click();
  await page.getByPlaceholder('User name or email').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123qwe');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2000); 
  await page.locator('xpath=//html/body/app-root/ng-component/div/div[1]/ng-component/div/section[2]/div/div[2]/div[1]/table/tbody/tr[2]/td[3]/button[1]').click();

});
