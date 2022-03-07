/// <reference types= 'cypress'/>
import {allGalleries} from '../pageObjects/allGalleriesPOM';
import {faker} from '@faker-js/faker';
describe('all galleries page', ()=>{

    let filterData = {
        filterInput: faker.name.title(),
    };

    it('visit all galleries page', ()=> {
        cy.visit('/');
    });

    it('load more galleries', ()=>{
        allGalleries.loadMoreBtn.click();
    });
    
    it('filter galleries', ()=>{
        allGalleries.filterGalleries(filterData.filterInput);
    
    });

});