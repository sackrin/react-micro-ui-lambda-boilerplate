## Bundle and build assets

- Run ```npm i```
- Run ```npx nps bundle```
- Delete ```/node_modules```
- Run ```npm ci```
- Run ```npx nps bundle.zip```

## Upload Lambda

- Navigate to the AWS lambda page
- Choose previously created Lambda Function
- Browse to "Function code"
- Choose "Upload a .zip file" for "Code entry type"
- Enter ".lambda/lambda.handler" for "Handler"
- Select "Upload" and select the generated "microui.zip" zip file
- Choose "Save"

## Upload Static Assets to S3 bucket

- Navigate to the AWS "S3 Management Console" page
- Choose your previously created S3 bucket
- Choose "Upload"
- Drag all files within the ".microui" to the upload box
- Choose "Next"
- Choose "Grant public read access to this object(s)" for "Manage public permissions"
- Select "Upload"

## Invalidate CloudFront Cache

- Navigate to the AWS "CloudFront Distributions" page
- Choose the cloudfront distribution you created earlier
- Choose the "Invalidations" tab
- Choose "Create Invalidation"
- Enter "/*" for "Object Paths"
- Choose "Invalidate"
