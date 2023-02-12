var collectionVariable=require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Users', () => {
  const utility = new Utility();  
  const random=utility.randomId(1000,9999)
  const firstName=faker.name.firstName();
  const lastname=faker.name.lastName();
  it('Update Users', () => {
    cy.request({
      method:'PUT',
      url:collectionVariable.baseURL+'/Users/Update',
      headers: {
        'Authorization':'Bearer'+' '+collectionVariable.Token,
        'Email':collectionVariable.Email,
        'Password':"eys@YH3782kdkso3"
      },
      body:
      { 
            "ID":collectionVariable.newUserID,
            "DomainsID": 938,
            "UserRoleId": 4,
            "FName": firstName,
            "LName": lastname,
            "DisplayName": "Test User "+firstName+" "+lastname,
            "Title":faker.name.jobTitle(),
            "Company":faker.company.name(),
            "DeptGroupID":6057,
            "Email": faker.internet.email(),
            "Active": true,
            "SiteId": 62582,
            "SubsiteId": 158140
          
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      cy.log(response.body)
      collectionVariable["newUserID"]=response.body.Id;
      cy.writeFile('cypress/fixtures/collectionVariable.json',JSON.stringify(collectionVariable));
    })
    
  })
})