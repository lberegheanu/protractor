Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my tests

  Scenario: Protractor and Cucumber Test
    Given Go to Petclinic
    When I'll add a new owner
    And I'll click the save button
    Then I should see my new owner in the list