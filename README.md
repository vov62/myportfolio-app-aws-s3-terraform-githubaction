# React Portfolio Hosting on AWS with Terraform and GitHub Actions

<h2>Description</h2>

<p>
 This project demonstrates how to host a React application on AWS S3 bucket using Terraform for infrastructure management and GitHub Actions for CI/CD automation. </br>
 Live: http://myportfolioreactappbucket.s3-website-us-west-2.amazonaws.com/
</p>

<h2>Technologies</h2>
:white_medium_small_square: React: My portfolio website
:white_medium_small_square: AWS S3 hosting
:white_medium_small_square: Terraform
:white_medium_small_square: GitHub Actions

<h2>Features</h2>

<p>&bull; Host a Static React app on S3 Bucket with public access.</p>
<p>&bull; Use Terraform toc resources.</p>
<p>&bull; Create ci/cd pipeline to automate deployments with GitHub Actions.</p>

<h2>How It Works</h2>
<h4>1. Infrastructure Setup with Terraform </h4>
<p>Create an S3 bucket for hosting the app.</p>
<p>Configure static website hosting and public access with a public URL.</p>

<h4>2. CI/CD Pipeline with GitHub Actions </h4>
<p>Automatically build the React app on push to the main branch.</p>
<p>Upload the build/ folder to the S3 bucket</p>

<h2>Screenshots</h2>
<h3>configure terraform to manage aws s3 bucket <h3>

<h3>GitHub Actions automatically build the React app on push to the main branch <h3>

<h3>files uploaded to s3 bucket to hosting the app and s3 provide the URL for public access <h3>
