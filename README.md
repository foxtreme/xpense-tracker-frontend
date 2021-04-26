# xpense-tracker-frontend
A react js web application for expense tracker

This app will fulfill the following requirements:

Feature: City Management

    Scenario: List Cities

        When the User Enters the Dashboard

        Then the Cities created are shown

    Scenario: Create a City

        When the User Clicks on Add City

        Then the City Creation form is shown

    Scenario: Edit a City

        Given the User selects a City and clicks on Edit

        Then the City Edition form is shown

    Scenario: Remove a City

        Given the User selects a City and clicks on Remove

        Then a confirmation is required And the City is Removed

 

Feature: Expense Management

    Scenario: List City Expenses

        Given the User selects a City And clicks on View Expenses

        Then a new screen is shown with the city’s expenses

    Scenario: List Expenses

        When the User enters the Dashboard

        Then the list of all expenses names is shown

    Scenario: Create Expense

        When the User clicks on Add Expense

        Then the Expense Creation form is shown

    Scenario: Edit Expense

        Given the user selects an Expense and clicks on Edit

        Then the edition form is shown

    Scenario: Remove Expense

        Given the user select an Expense and clicks on Remove

        Then a confirmation is required And the Expense is Removed

    Scenario: Order Expenses

        When the User Clicks on the Expense column headers Name, Frequency or Type

        Then the List of Expenses is ordered by the corresponding criteria

 

Feature: Manager Management

    Scenario: List Managers

        When the User enters the Dashboard

        Then the list of all manager names is shown

    Scenario: Create Manager

        Given the User clicks on Add Manager

        Then the Manager creation form is shown

    Scenario: Edit Manager

        Given the User selects a Manager and clicks on edit

        Then the Manager edition form is shown

    Scenario: Remove Manager

        Given the User selects a Manager and clicks on Remove

        Then a confirmation is required And the Manager is Removed

    Scenario: List Managers with expenses

        When the User selects Get Managers with Expenses

        Then a List of Users with expenses is shown
