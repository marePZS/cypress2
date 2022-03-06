///<reference types="cypress"/>
import {loginPage} from '../pageObjects/loginPOM';
const {faker} = require("@faker-js/faker");

describe('login test POM', ()=>{

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    };

    before('visit gallery page', ()=>{
        cy.visit("/login");
    });

    it('click on the login button', ()=>{
        
        loginPage.login(userData.randomEmail, userData.randomPassword);

    });

    it('logout', ()=>{
        loginPage.logoutBtn.should('have.length', 4);
        loginPage.logoutBtn.eq(3).click();
    });



});