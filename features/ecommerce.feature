Feature: E-commerce

  Scenario: User tries to order a product
    Given I am on the product page
    When I select a product
    And I click the add to cart button
    And user proceeds to checkout
    Then I should see the order confirmation page
    