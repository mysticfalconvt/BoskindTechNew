import { ImYoutube2 as icon } from 'react-icons/im';

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
      title: 'name',
      unitName: 'unit.name',
      grade: 'unit.GradeLevel',
      unit: 'unit.UnitNumber',
    },
    prepare: ({ title, unit, grade, unitName }) => ({
      title: `${title} Grade: ${grade} - Unit: ${unit}`,
      subtitle: unitName,
    }),
  },
};
