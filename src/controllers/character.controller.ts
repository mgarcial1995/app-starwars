import { Request, Response } from 'express';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { Character } from '../models/Character';
import { getCharacterService, createCharacterService } from '../services/character.service'

const lambdaClient = new LambdaClient({ region: 'us-east-1' });

const getCharacter = async (req: Request, res: Response) => {
    try {
        const name = String(req.query.name);
        const character = await getCharacterService(name)
        res.status(200).json(JSON.parse(character));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

const createCharacter = async (req: Request, res: Response) => {
    try {
        const body = req.body

        const character: Character = {
            nombre: body.nombre,
            altura: body.altura,
            peso: body.peso
        }
        const createresponse = await createCharacterService(character)
        res.status(200).json(JSON.parse(createresponse));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

export const handler = { getCharacter, createCharacter };