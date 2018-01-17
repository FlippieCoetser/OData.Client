@Customer
Feature: Create.Customer
    Background: Customer does not exist
        Given customer does not exist
        
    Scenario: Create.Customer
        When I create a customer
        Then customer should exist
    