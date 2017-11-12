---
layout: post
title: Companies Lax on Open Source Risk
---

Recently, a survey done on [open source risk](https://www.helpnetsecurity.com/2017/10/17/open-source-risk/) found that enterprises are not proactive in managing and securing the use open source. Almost 40% of respondants said that no one in their company was responsible for open source compliance. Use of insecure components and vulnerable open source libraries is on a rise in enterprise applications.

![Open Source Word Cloud](../images/Open-Source-Word-Cloud.jpg)

## Is this an accurate description of open source today?
Unfortunately yes, in fact the problem is more severe in some respects. Today, most organizations don't even have a good idea of the amount of open source they are using. They typically struggle to even produce a bill of materials report of the open source in use in the enterprise. The problem is quite challenging since it is difficult to track every single component or application in use in a large enterprise. Even when policies regarding use of open source exist, they are hard to enforce and keep track of.

## Unchecked use of open source is a growing problem in software development and enterprise applications
In fact, these days we see that a typical application today contains over 80% of open source code. The rapid growth of package mangers and central distribution repositories like Maven Central (Java), PyPI (Python), Ruby Gems (Ruby), etc. has made it very easy for developers to assembly application using off the shelf open source components. However, reusable code often leads to reusable vulnerabilities. The prime example of this is the recent Equifax data breach which was due to a vulnerability in the Apache Struts library. 

## What should be done to deal with the apparent problem?
Enterprises first of all need the capability to discover all the open source in use. This would help to provide visibility into the components and applications that they depend on. Once we have visibility we can then describe policies on use of open source. Typical examples of good open source policy can be not allowing any developer in the company to use a component with a known vulnerability. Or, having a policy to upgrade or patch a component that has a high risk issue. There are other compliance and legal risks involved in use of GPL libraries and they can also be formulated as usage policies. At the end of the day one needs to understand that open source use is pervasive and instead of trying to restrict it enterprises should focus more on monitoring and controlling it.
