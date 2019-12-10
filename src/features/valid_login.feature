Feature: Login functionality

    As a tester
    In order to ensure Login Functionality works,
    I want to verify with valid credentials

    @positiveScenario
    Scenario Outline: Logging in with valid credentials
        Given I am at the Login page
        When I log in using “<userName>” and “<password>”
        Then I should see the page title "Usage dashboard - Pelion Device Management Portal"
        Examples:
            | userName      | password     |
            | cloudportal33 | mbedcloud123 |

