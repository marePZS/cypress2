/// <reference types= 'cypress'/>
import {allGalleries} from '../pageObjects/allGalleriesPOM';
describe('all galleries page', ()=>{

    let filterData = {
        filterInput: 'zadatak galerija',
    };

    it('visit all galleries page', ()=> {
        cy.visit('/');
    });
    
    it('filter galleries', ()=>{
        allGalleries.filterGalleries(filterData.filterInput);
    
    });

});