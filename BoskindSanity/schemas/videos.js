import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer Name
  name: 'video',
  // visible title
  title: 'Videos',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Video Name',
      type: 'string',
      description: 'What is the name of the video',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'unit',
      title: 'Units',
      type: 'reference',
      to: [{ type: 'unit' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      unit: 'unit',
    },
  },
};
