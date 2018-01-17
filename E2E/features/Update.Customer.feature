@Customer
Feature: Update.Customer
    Background: customer exist
        Given I create a customer
        And customer does exist

    Scenario: Update.Customer
        When I update a customer
        Then customer should be updated

    