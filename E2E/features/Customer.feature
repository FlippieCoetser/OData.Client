@Customer
@API
Feature: Customer
    Background: Clean API
        Given a clean api

    Scenario: Create.Customer
        Given customer does not exist
        When I create a customer
        Then customer should exist
    
    Scenario: Retrieve.Customer
        Given I create a customer
        When I retrieve a customer
        Then customer should be returned
