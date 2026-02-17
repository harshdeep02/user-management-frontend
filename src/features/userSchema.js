// userFormSchema.js

export const userFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    validation: {
      minLength: 2
    }
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    validation: {
      minLength: 2
    }
  },
  {
    name: "phone",
    label: "Phone No.",
    type: "number",
    required: true,
    validation: {
      pattern: /^(\+91[\-\s]?)?[6789]\d{9}$/
    }
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  }
]
