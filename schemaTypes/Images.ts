import { defineField, defineType } from "sanity";

export default defineType({
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      description: 'Enter a descriptive title for the image (e.g., "Crane Cloud Logo")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title. Auto-generated from the title, but you can customize it.',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Image Description',
      type: 'text',
      description: 'Brief description of the image content. This will help with accessibility and SEO.',
      rows: 3,
    }),
    defineField({
      name: 'imageFile',
      title: 'Image File',
      type: 'image',
      description: 'Upload the image file here. Supported formats include JPEG, PNG, and JPG.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Add tags to categorize your image. This will help users find related images easily.',
    }),
    defineField({
        name : 'isActive',
        title : 'Active',
        type : 'boolean',
        initialValue : true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'imageFile',
    },
  },
});