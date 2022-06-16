import { Given, When, Then } from "@cucumber/cucumber";
import WineDrinker from "../../../src/test/actions/wine-drinker";
import assert from "assert";

Given("I have a new instance of Wine Drinker class", function () {
  this.wineDrinker = new WineDrinker();
});

When("I call drink wine function", function () {
  this.result = this.wineDrinker.drinkWine();
});

Then("The result is {string}", function (expectedString) {
  assert.equal(this.result, expectedString);
});
