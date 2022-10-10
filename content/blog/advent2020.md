+++
title = "An Advent Journey in Javascript and Vue.js"
date = 2020-12-22
[taxonomies]
categories=["blog"]
tags=["software development", "coding languages", "javascript", "vue", "puzzles"]
+++

This month I’ve been hard at work participating in [Advent of Code 2020](https://adventofcode.com/2020). We’ve recently switched over to trying [Cypress](https://www.cypress.io/) for our automation tool of choice at work, and the front end developers have recently switched over to using [Vue.js](https://vuejs.org/) to revitalize the front end development stack.

I wanted to refresh my Javascript skill set and become more familiar with Vue in order to position myself to help with these efforts. So, I decided it would be beneficial to participate in Advent of Code using Javascript as my language and by building out a front end in Vue to display and run my solution scripts.

As of the time of this writing, I’ve solved through day 18 and only looked for help on day 13 where I got stuck thinking about cycles and remainders. I deployed the application up on Heroku and, assuming I havent hit my free limit of resources, you can see it in action [here](https://adventofcode2020blw.herokuapp.com/). Here are a couple of screenshots of the current state of the front end I built:

![the day layout](/advent1.png)
![the calendar](/advent2.png)

This has been a fun journey, and I’ve learned/remembered a few things along the way:
- The various forms of looping through an iterable in Javascript behave in pretty subtly but importantly different ways. For example, you can’t return early from a `forEach` loop and if you use an `Array.length` in your for loop paramaters you can easily catch yourself in an infinite loop.
- Typecasting can be pretty easy to mess up. I constantly caught myself forgetting to `parseInt` on a string and only finding out pretty far down the line in nefarious ways.
- Logging to the console doesn’t always produce the desired results. Objects often display their final state when expanded rather than the state when they were logged, for example.
- It’s particularly important to choose the proper scope for variables and objects in Javascript. Using `let`, `var`, and `const` in the proper places can go a long way toward preventing unexpected issues.
- I actually introduced a promise in a meaningful way which allowed me to alter the state of a Vue component and wait until my script solution completes. This felt nice after struggling so much with promises in the past.

Vue is a pretty nice and easy to use framework, even for smaller hobby/one-off apps like this one. I really like how it separates the concerns between markup, script, data, and state.
I need to start balancing my time with studying for the Certified Kubernetes Application Developer (CKAD) and AWS certifications I purchased vouchers for to take next year, so my progress may slow a bit over the holiday. That said, I fully plan to finish the entire 25 days in the next few weeks. Stay tuned!


