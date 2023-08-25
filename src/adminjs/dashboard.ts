import AdminJs, { PageHandler } from 'adminjs'
/* Below, you can import your models for its showings on the page */
// import {  } from '../models'

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
    handler: async (requisition, response, context) => {
        /* Handler templates: */
        //  const property = await Property.count()

        response.json({
            /* Response template: */
            // 'Properties' : properties,
        })
    }
}
