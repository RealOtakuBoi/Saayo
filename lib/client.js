import SanityClient from '@sanity/client'
import ImageURLBuilder from '@sanity/image-url'

export const client =  SanityClient({
    projectId : 'mvamq2dc',
    dataset : 'production',
    apiVersion : '2022-09-20',
    useCdn : true,
    token : process.env.NEXT_SANITY_TOKEN
});

const builder = ImageURLBuilder(client);

export const urlFor = (source) => builder.image(source);