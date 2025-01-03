import { ChartBarStacked } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: ChartBarStacked as any,

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
       
    ]
})
