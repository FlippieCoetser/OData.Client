@Customer
Feature: Retrieve.Customer
    Background: customer exist
        Given I create a customer
        And customer does exist

    Scenario: Retrieve.Customer
        When I retrieve a customer
        Then customer should be returned