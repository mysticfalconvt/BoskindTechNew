import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'unit',
  // visible title
  title: 'Unit',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Unit Name',
      type: 'string',
      description: 'Name of the Unit',
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
      name: 'GradeLevel',
      title: 'Grade Level',
      type: 'string',
      description: 'What Grade is this for?',
    },
    {
      name: 'UnitNumber',
      title: 'Unit Number',
      type: 'string',
      description: 'What Unit Number?',
    },
    {
      name: 'Link',
      title: 'Link',
      type: 'url',
      description: 'Link to this unit',
    },
  ],
  preview: {
    select: {
      name: 'name',
      UnitNumber: 'UnitNumber',
      GradeLevel: 'GradeLevel',
    },
    prepare: ({ name, UnitNumber, GradeLevel }) => ({
      title: `Grade:${GradeLevel} - Unit:${UnitNumber} - ${name} `,
    }),
  },
};
