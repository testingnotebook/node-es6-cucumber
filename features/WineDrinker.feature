Feature: Wine Drinker

  Scenario: A person requires wine
    Given I have a new instance of Wine Drinker class
    When I call drink wine function
    Then The result is '1 glass finished'