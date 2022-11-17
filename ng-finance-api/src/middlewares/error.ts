import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../helpers/api-error'

export const errorMiddleware = (
    //Partial - atributos de "error" se tornam opcionais
	error: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = error.statusCode ?? 500
    // tratamento de erros inesperados
	const message = error.statusCode ? error.message : 'Internal Server Error'
	return res.status(statusCode).json({ message })
}