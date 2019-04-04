#Serverless Emailer

This is a portfolio project to show how I would make a emailing serverless microservice in Node.js & AWS Lambda. 
The context for this project is that a company wishes to send HTML emails to their users, in a way that is as efficient 
& cheap as possible. It was decided that server-less was ideal as it can handle large loads at any time as well as 
having a nice clean framework Serverless.js.

Emails will be sent using Sendgrid & Postmark; however an easily extendable system for additional clients is required.

AWS DynamoDB was selected for databasing as it can easily handle larger loads of traffic (and  I really wanted to try
it out). Dynamoose was selected for ORM as it is a Mongoose.js clone for Dynamo, and I have considerable experience with 
Mongoose.

## Objectives  
* To email a prescribed email address arbitrary text
* To use the email node.js clients for sendgrid & postmark  
* If sendgrid cannot send for any reason, then postmark will be used in redundancy's
* Any outages will be databased (this will have a toggle for testing)
* If an email client goes offline then we will be informed of the outage (admin email will need to be defined)

## Considerations
* At this time, Dynamoose & all other DynamoDB ORM's appear to not have any migration systems in-place. This means that
version control may be hard to manage.
* As all models & schemas are defined on this MS, any other MS servers outside of this project scope may encounter 
A-symmetrical data. 

## Architecture
BFF architecture was selected as it is relatively easy to work from a pseudo Consumer Driven Contract configuration where the route, payload,
& expected result is defined before any of the code. This could easily extend with PACT.

## Performance

## Modularity

## Setup
1. Clone this repo
2. Create a .env file for local dev env variables  
3. Ensure nodemon is installed OR just use serverless-offline, then 
