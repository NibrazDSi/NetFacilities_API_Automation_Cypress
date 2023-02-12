var collectionVariable=require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Assets', () => {
  const utility = new Utility();  
  const random=utility.randomId(1000,9999)
  const firstName=faker.name.firstName();
  const lastname=faker.name.lastName();
  var today = new Date().toISOString().slice(0, 10)
  it('Add Asset', () => {
    cy.request({
      method:'POST',
      url:collectionVariable.baseURL+'/Asset/InsertAndUpdate',
      headers: {
        'Authorization':'Bearer'+' '+collectionVariable.Token,
        'Email':collectionVariable.Email,
        'Password':"eys@YH3782kdkso3"
      },
      body:
      {
        "EquipmentId": today+"_"+random+" AssetTest",
        "DisplayName": "AssetTest "+today,
        "Category": "Air Conditioner",
        "Location": "AlaskaStTimeZone",
        "SiteId": collectionVariable.siteID,
        "Active": true,
        "EquipmentCategoryId": 9787,
        "BuildingId": collectionVariable.subsiteID,
        "UserId": collectionVariable.userID,
        "VendorId": 0,
        "DomainId": 938
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      cy.log(response.body)
      collectionVariable["assetID"]=response.body.TEquipmentId;
      cy.writeFile('cypress/fixtures/collectionVariable.json',JSON.stringify(collectionVariable));
    })
    
  })
})