import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CadastroUsuario from "..\..\Pages\RegisterPage\SignUpAdopet.cy."

const CampoNome = new CadastroUsuario();

Given('The user access the page of registration', () => {
    CampoNome. VisitandoPage()
})

When(' The user fill the field "Name"', () => {

})

And('The user fill the field "E-mail" ', () => {

})

And('The fill the field "password"', () => {
     
})

And('The user fill the field "confirm password"', () => {

})

Then('The user clik at the "cadastrar"', () => {

})