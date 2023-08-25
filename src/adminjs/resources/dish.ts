import { ResourceOptions, FeatureType } from "adminjs";
import uploadFileFeature from '@adminjs/upload'
import path from "path";

export const dishResourceOptions: ResourceOptions = {
    navigation: 'Menu',
    editProperties: ['name', 'details', 'uploadImage', 'vegetarian', 'categoryId', 'price'],
    filterProperties: ['name', 'details', 'vegetarian', 'categoryId', 'price', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'vegetarian', 'categoryId', 'price'],
    showProperties: ['id', 'name', 'details', 'vegetarian', 'imageUrl', 'categoryId', 'price', 'createdAt', 'updatedAt']
}

export const DishResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname,  '..', '..', '..', 'public'),
                opts: {}
            }
        },
        properties: {
            key: 'imageUrl',
            file: 'uploadImage'
        },
        uploadPath: (record, filename) => `images/course-${record.get('id')}${filename}`
    })
]