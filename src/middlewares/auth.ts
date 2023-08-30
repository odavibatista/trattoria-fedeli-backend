import { NextFunction, Request, Response } from "express";
import { UserInstance } from "../models/User";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request   {
    user?: UserInstance | null
}

export function ensureAuth(request: AuthenticatedRequest, response: Response, next: NextFunction)   {
    const authorizationHandler = request.headers.authorization

    if  (!authorizationHandler) return response.status(401).json({
        message: 'Não autorizado: token não encontrado.'
    })

    const token = authorizationHandler.replace(/Bearer /, '')

    jwtService.verifyToken(token, async (error, decoded) => {
        if (error || typeof decoded === 'undefined') return response.status(401).json({
            message: 'Não autorizado: token inválido.'
        })

        const user = await userService.findByEmail((decoded as JwtPayload).email)
        request.user = user
        next()
    })
}

export function ensureAuthViaQuery(request: AuthenticatedRequest, response: Response, next: NextFunction)   {
    const { token } = request.query

    if  (!token) return response.status(401).json({
        message: 'Não autorizado: nenhum token foi encontrado.'
    })

    if  (typeof token !== 'string') return response.status(400).json({
        message: 'Token deve ser do tipo string.'
    })

    jwtService.verifyToken(token, async (error, decoded)    =>  {
        if (error || typeof decoded === 'undefined') return response.status(401).json({
            message: 'Não autorizado: token inválido.'
        })

        const user = await userService.findByEmail((decoded as JwtPayload).email)
        request.user = user
        next()
    })
}