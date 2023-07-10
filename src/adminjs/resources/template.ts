import { ResourceOptions } from "adminjs"

export const categoryResourceOptions: ResourceOptions = {
    /* Here, you can insert the options for the property you want to list.
    For each table you have on your DB, you should insert in following this model */
    navigation: '', //  Name for the navigation browsing
    editProperties: ['', ''], 
    filterProperties: ['', '', '', ''], // In case of filtering options and/or triggers, insert the options here
    listProperties: ['id', '', ''], // Usually, 'id' is a property to be listed
    showProperties: ['', '', '', '']    // Properties to be showed
}