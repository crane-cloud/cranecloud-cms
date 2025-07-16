import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'events',
  title: 'Community Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'Enter a clear, descriptive title for your event (e.g., "CraneCloud Developer Meetup: Building Scalable APIs")',
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
      title: 'Event Description',
      type: 'text',
      description: 'Brief summary of what attendees can expect. This will appear in event listings and previews.',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Start Date',
      type: 'datetime',
      description: 'When does your event begin? Include both date and time.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateEnd',
      title: 'Event End Date',
      type: 'datetime',
      description: 'When does your event end? Optional but recommended for better scheduling.',
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
      description: 'Where is the event taking place? Can be a physical address, venue name, or online platform (e.g., "Zoom", "Google Meet").',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'reference',
      description: 'Select the category that best describes your event. Create new event types in the "Event Types" section if needed.',
      to: [{type: 'eventType'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      description: 'Main image for your event. Use the hotspot tool to focus on the most important part.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Detailed information about your event. Use rich text formatting and add images to make it engaging.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      description: 'Additional images for your event. These will be displayed in a gallery format.',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'isActive',
      title: 'Active Event',
      type: 'boolean',
      description: 'Toggle this to show/hide the event from public listings. Inactive events won\'t appear on the website.',
      initialValue: true,
    }),
    defineField({
      name: 'maxAttendees',
      title: 'Maximum Attendees',
      type: 'number',
      description: 'Maximum number of people who can attend. Leave empty for unlimited capacity.',
    }),
    defineField({
      name: 'tags',
      title: 'Event Tags',
      type: 'array',
      description: 'Add relevant tags to help people find your event. Examples: "JavaScript", "Cloud Computing", "Beginner-friendly".',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'organizer',
      title: 'Event Organizer',
      type: 'string',
      description: 'Name of the person or organization hosting this event.',
      }),
      defineField({
        name: 'isFeatured',
        title: 'Featured Event',
        type: 'boolean',
        description: 'Featured events will be highlighted on the website homepage and event listings.',
        initialValue: false,
      }), 
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      eventType: 'eventType.name',
      media: 'image',
    },
    prepare(selection) {
      const {title, date, location, eventType, media} = selection
      return {
        title,
        subtitle: `${eventType || 'No Type'} • ${location || 'No Location'} • ${date ? new Date(date).toLocaleDateString() : 'TBD'}`,
        media,
      }
    },
  },
 
}) 