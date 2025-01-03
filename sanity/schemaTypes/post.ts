import { PencilLine } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: PencilLine as any,

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            validation: Rule => Rule.max(200).error('Max 200 characters'),
        }),
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alt',
                        },
                    ],
                },
                {
                    type: 'code',
                    name: 'codeBlock',
                    title: 'Code',
                    options: {
                        language: 'typescript',
                        languageAlternatives: [
                            { title: 'Typescript', value: 'typescript' },
                            { title: 'Javascript', value: 'javascript' },
                            { title: 'HTML', value: 'html' },
                            { title: 'CSS', value: 'css' },
                        ],
                    },
                },
            ],
        },
        // { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: { type: 'category' } }] },
    ],
})
