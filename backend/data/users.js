import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Usama',
    email: 'usama@yahoo.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Ali',
    email: 'ali@yahoo.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name: 'Asad',
    email: 'asad@yahoo.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
];

export default users;
