export default class AllGalleries{

    get filterInput(){
        return cy.get('.form-control');
    };

    get filterBtn(){
        return cy.get('.input-button');
    };

    filterGalleries(filterInput){
        this.filterInput.type(filterInput);
        this.filterBtn.click();
    }

};

export const allGalleries = new AllGalleries();