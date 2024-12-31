# React Portfolio Hosting on AWS with Terraform and GitHub Actions

<h2>Description</h2>

<p>
 This project demonstrates how to host a React application on AWS S3 bucket using Terraform for infrastructure management and GitHub Actions for CI/CD automation. </br>
 Live: http://myportfolioreactappbucket.s3-website-us-west-2.amazonaws.com/
</p>

<h2>Technologies</h2>
:white_medium_small_square: React: My portfolio website
:white_medium_small_square: AWS S3 
:white_medium_small_square: Terraform
:white_medium_small_square: GitHub Actions

<h2>Features</h2>

<p>&bull; Host a Static React app on S3 Bucket with public access.</p>
<p>&bull; Use Terraform to manage AWS resources.</p>
<p>&bull; Create ci/cd pipeline to automate deployments with GitHub Actions.</p>

<h2>How It Works</h2>
<h4>1. Infrastructure Setup with Terraform </h4>
<p>Create an S3 bucket for hosting the app.</p>
<p>Configure static website hosting and public access with a public URL.</p>

<h4>2. CI/CD Pipeline with GitHub Actions </h4>
<p>Automatically build the React app on push to the main branch.</p>
<p>Upload the build/ folder to the S3 bucket and provide the URL for public access </p>

<h2>Screenshots</h2>

<img src="https://github.com/user-attachments/assets/7bd210e1-cd67-45e5-b8ec-9cb8626a78fc" alt="mermaid info" width="400" height="auto">

<h4>configure terraform to manage aws s3 bucket </h4>
<img width="600" alt="4" src="https://github.com/user-attachments/assets/02456a66-3a1e-4570-8ec5-c55de3b2945c" />

<h4>GitHub Actions automatically build the React app on push to the main branch </h4>
<img width="600" alt="1" src="https://github.com/user-attachments/assets/8763e0ff-39c3-406d-bd4f-3aa197f639d3" />

<h4>files uploaded to s3 bucket and provide the URL for public access </h4>
<img width="600" alt="2" src="https://github.com/user-attachments/assets/b8a8c5b4-1b21-41f6-aa4d-24b3b13784ad" />

<h4>hosted application</h4>
<img width="600" alt="5" src="https://github.com/user-attachments/assets/cc0303f7-86bf-45c5-ac20-fb9027614c82" />
