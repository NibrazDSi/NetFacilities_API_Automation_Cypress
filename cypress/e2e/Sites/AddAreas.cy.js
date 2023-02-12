var collectionVariable = require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Sites', () => {
    const utility = new Utility();
    const random = utility.randomId(1000000, 999999)
    it('Add Areas', () => {
        cy.request({
            method: 'POST',
            url: collectionVariable.baseURL + '/sites/AddAreas',
            headers: {
                'Authorization': 'Bearer' + ' ' + collectionVariable.Token,
                'Email': collectionVariable.Email
            },
            body:
            {
                "tblBldgsID":collectionVariable.subsiteID,
                "tblSitesID": collectionVariable.siteID,
                "Suite": "Area "+faker.address.street(),
                "tblFloorsID": 6,
                "Size": random,
                "IsPublic": false,
                "EnterPermission": false,
                 "UserId": collectionVariable.userID
      }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body)
        collectionVariable["areaID"] = response.body.Id;
        cy.writeFile('cypress/fixtures/collectionVariable.json', JSON.stringify(collectionVariable));
    })
    
  })
})