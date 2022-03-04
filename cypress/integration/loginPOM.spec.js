///<reference types="cypress"/>
import {loginPage} from '../pageObjects/loginPOM';

describe('login test POM', ()=>{

    

    before('visit gallery page', ()=>{
        cy.visit("/login");
    });

    it('click on the login button', ()=>{
        
        loginPage.login('markopzs1@test.com','password123');

    });

    it('logout', ()=>{
        loginPage.logoutBtn.should('have.length', 4);
        loginPage.logoutBtn.eq(3).click();
    });



});