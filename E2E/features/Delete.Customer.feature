@Customer
Feature: Delete.Customer
    Background: customer exist
        Given I create a customer
        And customer does exist

    Scenario: Delete.Customer
        When I delete a customer
        Then customer should not exist