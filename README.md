# Test Doubles Exercise 

Test doubles exercise as part of the MCR Codes Fundamentals module. It is done by Chris Peakin, Dan Hope, July Moss and Stuart Green as a group progamming practice. 

## Description

This exercise examines the use of the test doubles technique in place of dependencies in unit tests. It simulates a real life example to test if the lamp is working safely and as expected. Dummy, stub and spy were used in this practice.

### User story
* As a user, I want to be able to switch on the light
* As a user, I want to be able to switch off the light
* As a user, I want to know how long the bulb can last

### Hint:

To create two ***classes***:

**Lamp**

* Takes in a bulb 
* switchOn
* switchOff

**Bulb**

* electrify (function) - to test whether it can be turned on
