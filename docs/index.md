## Setting up local workspace

- Clone this repo and run ```npm i```
- Run ```npx nps local``` to run the micro frontend locally

## AWS Console
In order to deploy a micro frontend project via AWS Lambda Function you will need to have an AWS account. While the actual application will be run within a Lambda Function, AWS services such as API Gateway, CloudFront and S3 will also be used to store and serve your micro frontend assets and routes.

- Sign into AWS console and select your desired region

## Creating the AWS Lambda function

- Navigate to the AWS lambda page
- Choose "Create function"
- Choose "Use a blueprint" and enter "microservice" into the search bar
- Choose "microservice-http-endpoint"
- Enter function name "hellowWorldMicroFrontend"
- Choose "Create a new role from AWS policy templates"
- Enter role name "lambda-microfrontend-role"
- Choose "Create an API"
- Choose HTTP API
- Choose "Open" for security
- Select "Create Function"

## Setting up API HTTP Gateway

The API Gateway will be used to serve bootstrap.js, API endpoints and server-side rendered components. The gateway will be used to route traffic from the outside world to you Lambda Function.

- Navigate to the AWS "API Gateway" page
- Choose the API Gateway you created
- Choose "Routes" from the side menu
- Choose the generated route "Any" and Delete

## Configuring API HTTP Gateway

- Choose "Create"
- Choose "GET" and enter "/bootstrap.js" and Create
- Choose "Create"
- Choose "GET" and enter "/testing" and Create
- Choose "Create"
- Choose "ANY" and enter "/ExampleComponent" and Create
- Choose "Integrations" from the side menu
- Select bootstrap.js ANY
- Choose "hellowWorldMicroFrontend" and "Attach integration"
- Repeat for each route

## Setting up S3 for static asset hosting

- Navigate to the AWS "S3 Management Console" page
- Choose "Create bucket"
- Enter name "hello-world-micro-frontend"
- Ensure correct region is selected
- Uncheck "Block all public access"
- Choose "Create Bucket"
- Select "hello-world-micro-frontend" from the list of buckets

## Configuring S3 for static asset hosting

- Choose "Properties" tab
- Choose "Static website hosting"
- Enter "Use this bucket to host a website"
- Enter "manifest.json" into the Index document
- Choose "Save"
- Choose "Permissions" tab
- Update with the following permission
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::hello-world-micro-frontend/*"
        }
    ]
}
```

## Setting up cloudfront for static assets

- Navigate to the AWS "CloudFront Distributions" page
- Choose "Create Distribution"
- Choose Web "Get Started"
- Enter the S3 endpoint URL into "Origin Domain Name"
- Choose "Create Distribution"

## Update AWS Lambda Environment Variables

- Navigate to the AWS lambda page
- Choose previously created Lambda Function
- Choose "Manage environment variables"
- Choose "Add environment variable"
- Enter "PROFILE" Key and "latest" Value
- Choose "Add environment variable"
- Enter "ASSET_URL" Key and CloudFront Domain Name as URL ie. "https://xxxxxx.cloudfront.net"
- Choose "Add environment variable"
- Enter "API_URL" Key and API Invoke URL as URL ie. "https://xxxxx.execute-api.ap-xxxxxxx.amazonaws.com"
- Choose "Save"

## Deployment

- [Deploy Micro Frontend Manually](./manual-deploy.md)
