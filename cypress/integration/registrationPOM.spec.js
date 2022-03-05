/// <reference types="cypress" />
import {registerPage} from '../pageObjects/registrationPOM';

describe('register user', ()=>{

    beforeEach('visit registration page', ()=> {
        cy.visit('/register');
        cy.url().should('contain', '/register');
    });

    it('without first-name', ()=>{ 
        registerPage.register(' ','Pzs', 'markopzs7@test.com', 'password123', 'password123');
        registerPage.firstName.should('be.empty');
    });

    it('without last-name', ()=>{ 
        registerPage.register('Marko',' ', 'markopzs7@test.com', 'password123', 'password123');
        registerPage.lastName.should('be.empty');
    });

    it('invalid email', ()=>{    
        registerPage.register('Marko','Pzs', 'markopzs7@testcom', 'password123', 'password123');
        registerPage.alert.should('have.class', 'alert');
        
    });
    
    it('already used email', ()=>{     
        registerPage.register('Marko','Pzs', 'markopzs1@test.com', 'password123', 'password123');
        registerPage.alert.should('have.class', 'alert');
    });

    it('password-confirmation invalid', ()=>{
        registerPage.register('Marko','Pzs', 'markopzs7@test.com', 'password123', 'password1234444');
        registerPage.alert.should('have.class', 'alert');
    });

    // it('valid registration', ()=>{           // ------->  valid only once
    //     registerPage.register('Marko','Pzs', 'markopzs7@test.com', 'password123', 'password123');
    // });

});