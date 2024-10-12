import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { Character } from '../models/Character';

const lambdaClient = new LambdaClient({ region: 'us-east-1' });

export const getCharacterService = async (name: string) => {
    try {
        const senddata = {
            "httpMethod": "get",
            "pathParameters": {"name": name},
            "body": null
        }
        const command = new InvokeCommand({
            FunctionName: 'fn-get-by-name-dev-getByName',
            Payload: Buffer.from(JSON.stringify(senddata)),
        });
        
        const response: any = await lambdaClient.send(command);
        const responsePayload = Buffer.from(response.Payload).toString();
        return responsePayload
    } catch (error) {
        throw Error()
    }
};

export const createCharacterService = async (character: Character) => {
    try {
        const senddata = {
            "httpMethod": "post",
            "pathParameters": {},
            "body": JSON.stringify(character)
        }
        const command = new InvokeCommand({
            FunctionName: 'fn-get-by-name-dev-createCharacter',
            Payload: Buffer.from(JSON.stringify(senddata)),
        });
        const response: any = await lambdaClient.send(command);
        const responsePayload = Buffer.from(response.Payload).toString();
        return responsePayload
    } catch (error) {
        throw Error()
    }
};

export default {
    getCharacterService,
    createCharacterService
}