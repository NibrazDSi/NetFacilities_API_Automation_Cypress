const collectionVariable=require('../fixtures/collectionVariable.json');
describe('Login', () => {
  it('Login Authorized User', () => {
    cy.request({
      method:'POST',
      url:collectionVariable.baseURL+'/LoginAPI/IsAuthorised',
      body:
      {
        "EmailAddress": "testing@gmai.com",
        "Password": "eys@YH3782kdkso3"
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      cy.log(response.body)
      expect(response.body.IsAuthorized).to.eq(true);
      collectionVariable.Token=response.body.JWTToken;
      collectionVariable["userID"]=response.body.UserId;
      cy.writeFile('cypress/fixtures/collectionVariable.json',JSON.stringify(collectionVariable));
    });
    
  })
})