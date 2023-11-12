# CDK TypeScript project for AWS Lambda with API Gateway and DynamoDB

This is a CDK TypeScript project for AWS Lambda with API Gateway and DynamoDB.

## Prerequisites

* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)
* [Node.js](https://nodejs.org/en/download/)
* [TypeScript](https://www.typescriptlang.org/download)

## Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to compile TypeScript to JavaScript
4. Run `cdk bootstrap` to bootstrap the AWS CDK Toolkit stack
5. Run `cdk deploy` to deploy the stack


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
