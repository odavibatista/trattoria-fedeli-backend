import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import { sequelize } from '../database'
import { brandingOptions } from './branding'
import { locale } from './locale'
import { dashboardOptions } from './dashboard'

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    branding: brandingOptions,
    locale: locale /* optional feature for PT-BR translation */,
    dashboard: dashboardOptions /* optional feature for alternative customizes */
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)
