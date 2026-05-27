#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkOpswatchIamStack } from '../lib/cdk-opswatch-iam-stack';

const app = new cdk.App();
new CdkOpswatchIamStack(app, 'OpswatchIam', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
const tags = {
  'Product ID': 'prod-gis66v5zxadfk',
  'Status': 'Public',
  'Delivery method': 'Professional Services',
  'Product code': '8d3dhvaytz2l63mydmfgn9wkf',
  'Last modified': '6. Nov. 2024',
  'ARN': 'arn:aws:aws-marketplace:us-east-1:773355297247:AWSMarketplace/ProfessionalServicesProduct/prod-gis66v5zxadfk'
};
for (const [key, value] of Object.entries(tags)) {
  cdk.Tags.of(app).add(key, value);
}