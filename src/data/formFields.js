const loginFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "text",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: 'Full name',
    labelFor: 'full_name',
    id: 'full_name',
    name: 'full_name',
    type: 'text',
    autoComplete: 'full_name',
    isRequired: true,
    placeholder: 'Full name'
  },
  {
    labelText: 'email',
    labelFor: 'email',
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email'
  },
  {
    labelText: 'Address',
    labelFor: 'address',
    id: 'address',
    name: 'address',
    type: 'text',
    autoComplete: 'address',
    isRequired: true,
    placeholder: 'Address'
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

export { loginFields, signupFields };
