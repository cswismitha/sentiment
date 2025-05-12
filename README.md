# Lambda Function: [sentimentanalysis]
# Azure Function: [sentimentanalysis]

## Overview

This function, named `[sentimentanalysis]`, serves the purpose of getting the sentiment analysis summary of the app reviews from iTunes RSS Feed API for specific appId configured with HTTP triggers. It is built using Javascript running on Node runtime environment and deployed within the AWS Lambda/Azure Function App environment.

## Functionality

This function performs the following actions:

1.  Fetches App reviews and stores the reviews in Dynamo DB/Cosmos DB respectively for AWS Lambda/Azure Function
2.  Generate summary using node-summarizer package
3.  Send notification to the SQS/Storage Queue once the summary is complete.

## Deployment

This function can be deployed using various methods, including:

* **AWS/Azure Management Console:** Manual creation and configuration through the AWS/Azure web interface.
* **Infrastructure as Code (IaC) tools (e.g., Terraform, Pulumi):** Third-party tools for managing cloud infrastructure.

**Deployment Package:**

The function code and its dependencies (if any) are packaged into a ZIP file named `sentimentanalysis.zip` (or a similar name depending on your deployment method).

## Configuration

The following environment variables can be configured for this Lambda function:

* `[DB_ENDPOINT]`: DB Endpoint URL of Cosmos DB
* `[DB_KEY]`: DB KEY of Cosmos DB
* `[DB_ID]` : Database ID of Cosmos DB
* `[DB_CONTAINERID]` : Cosmos Table Name for storing App reviews
* `[DB_SUMMCONTAINERID]` : Cosmos Table Name for storing App review summary
* `[REGION]` : AWS Region Name
* `[SQSURL]` : Amazon SQS URL
* `[DB_REVIEW_TABLE]` : Dynamo Table Name for storing App reviews
* `[DB_SUMM_TABLE]` : Dynamo Table Name for storing App review summary
* `[AZQUEUE_NAME]` : Azure Storage Queue Name
* `[AZQUEUE_URL]` : Azure Storage Queue URL

These variables can be set through the AWS/Azure Management Console, AWS CLI, or your chosen IaC tool.

## Permissions

The execution role associated with this Lambda function (`arn:aws:iam::[your_account_id]:role/[your_lambda_execution_role]`) has the following AWS managed policies and/or custom permissions attached:

* `AWSLambdaBasicExecutionRole`: Provides basic permissions for a Lambda function to write logs to CloudWatch Logs.
* `AmazonDynamoDBFullAccess`: Provides Lambda function to do CRUD operations with Dynamo DB
* `AmazonSQSFullAccess`: Provides Lambda function to add/remove messages into SQS

## Input and Output

**Input:**

The structure of the input event passed to this Lambda function depends on the event source that triggers it. Examples include:

* **API Gateway:** An event object containing details about the HTTP request (headers, body, query parameters, etc.).
    ```json
    {
      "resource": "/my/path",
      "path": "/my/path",
      "httpMethod": "POST",
      "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json"
      },
      "body": "{\"key\": \"value\"}",
      "isBase64Encoded": false
    }
    ```

**Output:**

The output of the Lambda function depends on how it is invoked and integrated with other services. Common output formats include:

* **API Gateway Integration:** A JSON object representing the HTTP response (status code, headers, body).
    ```json
    {
      "statusCode": 200,
      "headers": {
        "Content-Type": "application/json"
      },
      "body": "{\"message\": \"Success!\"}"
    }
    ```

## Logging and Monitoring

This Lambda function utilizes AWS CloudWatch Logs for logging. You can find detailed logs of the function's execution in the CloudWatch Logs service under the log group `/aws/lambda/[YourFunctionName]`.
For Azure, you can view logs in Application Insights.
