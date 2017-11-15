@Customer
Feature: Delete.Customer
    Background: Clean API
        Given a clean api
        And I create a customer

    Scenario: Delete.Customer
        When I delete a customer
        Then customer should not exist