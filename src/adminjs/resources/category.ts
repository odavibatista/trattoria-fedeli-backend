import { ResourceOptions } from "adminjs"

export const categoryResourceOptions: ResourceOptions = {
    navigation: 'Menu',
    editProperties: ['name', 'position', 'description',],
    filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'position', 'description'],
    showProperties: ['name', 'position', 'description', 'createdAt', 'updatedAt']
}