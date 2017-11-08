@API
Feature: Customer
    Scenario: Create.Customer
        Given customer does not exist
        When I create a customer
        Then customer should exist
