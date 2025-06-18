// Blog post schema for Sanity Studio
const blogSchema = {
  name: "blog",
  title: "Blog Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(200),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "AI Fundamentals", value: "ai-fundamentals" },
          { title: "Machine Learning", value: "machine-learning" },
          { title: "Deep Learning", value: "deep-learning" },
          { title: "AI Tools & Frameworks", value: "ai-tools" },
          { title: "Industry Trends", value: "industry-trends" },
          { title: "Student Guides", value: "student-guides" },
          { title: "Project Tutorials", value: "project-tutorials" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "difficulty",
      title: "Difficulty Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "readTime",
      title: "Estimated Read Time (minutes)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(60),
    },
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      description: "Mark as featured to highlight on homepage",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "featuredImage",
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

export default blogSchema;