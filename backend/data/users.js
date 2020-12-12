import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sobhi Arood',
    email: 'sobhi@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ahmed Abbas',
    email: 'ahmed@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
