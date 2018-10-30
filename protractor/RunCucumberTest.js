package com.endava.com;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions
(
    features = "src/test/resources/features",
    glue = "stepdefs"        //plugin = "{pretty}"
)

public class RunCucumberTest extends AbstractTestNGCucumberTests{

}