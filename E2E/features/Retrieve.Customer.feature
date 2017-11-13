@Customer
@API
Feature: Retrieve.Customer
    Background: Clean API
        Given a clean api
        And I create a customer

    Scenario: Retrieve.Customer
        When I retrieve a customer
        Then customer should be returned