import { Stack, StackProps, CfnParameter } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';

export class CdkOpswatchIamStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const param_principal = new CfnParameter(this, 'OpswatchRolePrincipal', {
      type: 'String',
    });

    const opswatch_role = new iam.CfnRole(this, 'OpswatchRole', {
      roleName: 'OpswatchRole',
      assumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [{
          Effect: 'Allow',
          Principal: {
            AWS: param_principal.valueAsString
          },
          Action: 'sts:AssumeRole'
        }]
      },
      policies: [{
        policyName: 'TagsPolicy',
        policyDocument: {
          Version: '2012-10-17',
          Statement: [{
            Sid: 'GenericTagApi',
            Effect: 'Allow',
            Action: [
              'tag:GetResources'
            ],
            Resource: '*'
          }, {
            Sid: 'CustomTagApis',
            Effect: 'Allow',
            Action: [
              'cloudfront:ListTagsForResource',
              'route53:ListTagsForResource',
              'ec2:DescribeTags',
            ],
            Resource: '*'
          }]
        }
      }, {
        policyName: 'DescribePolicy',
        policyDocument: {
          Version: '2012-10-17',
          Statement: [{
            Effect: 'Allow',
            Action: [
              'acm:DescribeCertificate',
              'cloudfront:GetDistribution',
              'route53:GetHealthCheck',
              'efs:DescribeFileSystems',
              'ec2:DescribeVolumes',
              'ec2:DescribeInstances',
              'ec2:DescribeInstanceCreditSpecifications',
              'dynamodb:DescribeTable',
              'sqs:GetQueueAttributes',
              'rds:DescribeDBInstances',
              'ec2:DescribeInstanceTypes',
              'rds:DescribeDBClusters',
              'rds:DescribeDBClusterParameters',
              'rds:DescribeDBParameters'
            ],
            Resource: '*'
          }]
        }
      }]
    });
  }
}
