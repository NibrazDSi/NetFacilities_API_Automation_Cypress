var collectionVariable=require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Sites', () => {
  const utility = new Utility();  
  const random=utility.randomId(1000,9999)
  it('Update Building', () => {
    cy.request({
      method:'PUT',
      url:collectionVariable.baseURL+'/sites/UpdateBuildling',
      headers: {
        'Authorization':'Bearer'+' '+collectionVariable.Token,
        'Email':collectionVariable.Email
      },
      body:
      {
        "Id": collectionVariable.subsiteID,
        "SitesID": collectionVariable.siteID,
        "Address": faker.address.streetAddress(),
        "FullBldgTenant": false,
        "Name": "Updated Building "+faker.address.buildingNumber(),
        "isDefault": false,
        "UserId":collectionVariable.userID
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      cy.log(response.body)
      collectionVariable["subsiteID"]=response.body.Id;
      cy.writeFile('cypress/fixtures/collectionVariable.json',JSON.stringify(collectionVariable));
    })
    
  })
})