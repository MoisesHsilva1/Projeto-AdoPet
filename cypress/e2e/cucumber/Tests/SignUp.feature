feature: User registration

Scenario: Complete user registration
    Given The user access the page of registration
    When  The user fill the field "Name"
    And The user fill the field "E-mail" 
    And The fill the field "password"
    And The user fill the field "confirm password"
    Then The user clik at the "cadastrar"