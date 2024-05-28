import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CadastroUsuario from "..\..\Pages\RegisterPage\SignUpAdopet.cy."

const CampoNome = new CadastroUsuario();

Given('The user access the page of registration', () => {
    CampoNome.VisitandoPage()
    cy.get('commit')
})

When(' The user fill the field "Name"', () => {
    CampoNome.VisitandoPage()cy.get('commit')
})

And('The user fill the field "E-mail" ', () => {
    cy.get('commit')
    cy.get('commit')
    
})

And('The fill the field "password"', () => {
     
})

And('The user fill the field "confirm password"', () => {

})

Then('The user clik at the "cadastrar"', () => {

})