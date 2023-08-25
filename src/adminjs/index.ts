import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import { sequelize } from '../database'
import { brandingOptions } from './branding'
import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { authenticationOptions } from "./authentication";
import session from "express-session"
import connectSession from "connect-session-sequelize"
import { ADMINJS_COOKIE_PASSWORD } from "../config/environment";

const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({ db: sequelize })
store.sync()

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    branding: brandingOptions,
    locale: locale /* optional feature for PT-BR translation */,
    dashboard: dashboardOptions /* optional feature for alternative customizes */
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    authenticationOptions,
    null,
    {
        resave: false,
        saveUninitialized: false,
        store: store,
        secret: ADMINJS_COOKIE_PASSWORD
    }
)