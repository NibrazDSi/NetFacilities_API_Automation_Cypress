var collectionVariable=require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Sites', () => {
  const utility = new Utility();  
  const random=utility.randomId(1000,9999)
  const siteName=random+"_"+"Site_Test";
  var today = new Date().toISOString().slice(0, 10)
  const siteNumber=today+"_Site_Test "+random;
  const phone = "017"+utility.randomId(10000000,99999999);
  it('Add Sites', () => {
    cy.request({
      method:'POST',
      url:collectionVariable.baseURL+'/sites/Add',
      headers: {
        'Authorization':'Bearer'+' '+collectionVariable.Token,
        'Email':collectionVariable.Email
      },
      body:
      {
        "SiteNumber": siteNumber,
        "Name": siteName,
        "EntityName": "",
        "Address1": faker.address.streetAddress(),
        "Address2": "",
        "City":faker.address.city(),
        "State": faker.address.state(),
        "Zip": faker.address.zipCode(),
        "Phone": faker.phone.number(),
        "Fax": "",
        "TimeZonesID": 18,
        "RegionID": 19553,
        "DistrictsID": 20757,
        "SiteAdminID": 282703,
        "Active": true,
        "InactiveDate": null,
        "SqFt": 1.0,
        "DomainsID": 938,
        "Vendor": false,
        "SuiteDisplay": "",
        "UserId": collectionVariable.userID
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      cy.log(response.body)
      collectionVariable["siteID"]=response.body.Id;
      expect(response.body.Message).to.eq("New site has been created.");
      cy.writeFile('cypress/fixtures/collectionVariable.json',JSON.stringify(collectionVariable));
    })
    
  })
})