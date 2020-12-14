import { GrSort as icon } from "react-icons/gr";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
