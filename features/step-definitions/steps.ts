import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import MainPage from '../pageobjects/main.page.js';

const pages = {
    main: MainPage
}

Given(/^I open store page$/, async () => {
    await pages['main'].open()
    await browser.pause(10000);

})