import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamo from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import path = require('path');
import { Runtime } from 'aws-cdk-lib/aws-lambda';



export class CdkPrimeraAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const greetensTable = new dynamo.Table(this, 'GreetensTable', {
      partitionKey: { name: 'id', type: dynamo.AttributeType.STRING },
    });

    // const saveHelloFunction = new lambda.NodejsFunction(this, 'SaveHelloFunction', {
        
    //     runtime: lambda.Runtime.NODEJS_14_X,
    //     entry: path.resolve(__dirname,'../lambda/savehello.ts'),
    //     handler: 'saveHello',
    //     entry: path.resolve(__dirname,'../lambda/savehello.ts'),
    //     code: lambda.Code.fromAsset(path.resolve(__dirname,'../lambda')),
    //     bundling: {
    //       externalModules: ['aws-sdk'], // 'aws-sdk' se incluirá automáticamente
    //     },
    //     environment: {
    //       GREETING_TABLE: greetensTable.tableName,

    //     },
       
        
    // });

    const saveHelloFunction = new lambda.NodejsFunction(this, 'SaveHelloFunction', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'saveHello',
      
      entry: path.join(__dirname, '../lambda/handler.js'), // Ajusta la ruta al archivo de entrada real
      environment: {
        GREETING_TABLE: greetensTable.tableName,
      },
      bundling: {
        externalModules: [
          '@aws-sdk/*', // Use the AWS SDK for JS v3 available in the Lambda runtime
        ],
      },
    });

    greetensTable.grantReadWriteData(saveHelloFunction);

    const helloAPI = new apigateway.RestApi(this, 'helloAPI')
    
    helloAPI.root
    .resourceForPath('hello')
    .addMethod('POST', new apigateway.LambdaIntegration(saveHelloFunction));   
    }
}
