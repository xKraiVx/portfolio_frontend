export interface StrapiImage {
    data: {
        id: string,
        attributes: {
            name: string
            alternativeText: string
            caption: string
            width: number
            height: number
            formats: JSON
            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl: string
            provider: string
            provider_metadata: JSON
            createdAt: Date
            updatedAt: Date
        }
    }
}