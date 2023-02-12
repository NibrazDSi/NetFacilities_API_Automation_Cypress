var collectionVariable=require('../../fixtures/collectionVariable.json');
import { faker } from '@faker-js/faker';
import Utility from '../../fixtures/utilitys';

describe('Assets', () => {
  it('Get Asset Details', () => {
    cy.request({
      method:'GET',
      url:collectionVariable.baseURL+'/Asset/FillAssetItems?assetId='+collectionVariable.assetID+'&userId='+collectionVariable.userID+'&vendorId=0&domainId=938',
      headers: {
        'Authorization':'Bearer'+' '+collectionVariable.Token,
        'Email':collectionVariable.Email,
        'Password':"eys@YH3782kdkso3"
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      cy.log(response.body)
    })
    
  })
})