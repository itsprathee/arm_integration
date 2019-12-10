Feature: Login functionality

    As a tester
    In order to ensure Login Functionality works,
    I want to verify with invalid credentials

    @negativeScenario
    Scenario Outline: Logging in with invalid credentials
        Given I am at the Login page
        When I log in using “<userName>” and “<password>”
        Then I should see the "Wrong email or password." message
        Examples:
            | userName      | password     |
            | invalid12     | mbedcloud123 |
            | cloudportal33 | invalid      |