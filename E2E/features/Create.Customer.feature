@Customer
Feature: Create.Customer
    Background: Clean API
        Given a clean api
        And customer does not exist

    Scenario: Create.Customer
        When I create a customer
        Then customer should exist
    