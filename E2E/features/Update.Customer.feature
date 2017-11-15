@Customer
@API
Feature: Update.Customer
    Background: Clean API
        Given a clean api
        And I create a customer

    Scenario: Update.Customer
        When I update a customer
        Then customer should be updated

    