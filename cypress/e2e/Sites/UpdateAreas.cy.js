var collectionVariable = require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Sites', () => {
    const utility = new Utility();
    const random = utility.randomId(1000000, 999999)
    it('Update Areas', () => {
        cy.request({
            method: 'PUT',
            url: collectionVariable.baseURL + '/sites/UpdateAreas',
            headers: {
                'Authorization': 'Bearer' + ' ' + collectionVariable.Token,
                'Email': collectionVariable.Email
            },
            body:
            {
                "ID":collectionVariable.areaID,
                "tblBldgsID":collectionVariable.subsiteID,
                "tblSitesID": collectionVariable.siteID,
                "Suite": "Updated Area "+faker.address.street(),
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