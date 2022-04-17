const db = require('./db')
const Employee = require('./models/employee')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const findAll = async () => {
  const employees = await employee.find()
  console.log('All employees:', employees)
}

const createOne = async () => {
  const employees = new Employee({
    address: {
      street: 'Believe It!',
      city: 'Hidden Village',
      state: 'WY',
      zip: 12584
    },
    first_name: 'Naruto',
    last_name: 'Uzumaki',
    email: 'naruto.uzumaki@email.com',
    job_title: 'Software Developer',
  });
  await employees.save();
  console.log('Created Employee:', employees)
}

const createMany = async () => {
  const employees = await Employee.insertMany([
    {
      address: {
        street: "I'm not your boyfriend!'",
        city: 'Marzipan',
        state: 'IL',
        zip: 64597
      },
      first_name: 'Chowder',
      last_name: 'Cartoon Network',
      email: 'chowder.cartoonnetwork@email.com',
      job_title: 'Web Developer',
    },
    {
      address: {
        street: 'Underworld',
        city: 'Endsville',
        state: 'WT',
        zip: 66600
      },
      first_name: 'Grim',
      last_name: 'Reaper',
      email: 'grim.reaper@email.com',
      job_title: 'Web Designer',
    },
    {
      address: {
        street: 'Cookie Cat!',
        city: 'Beach City',
        state: 'DL',
        zip: 12684
      },
      first_name: 'Steven',
      last_name: 'Universe',
      email: 'steven.universe@email.com',
      job_title: 'Software Developer Lead',
    }
  ]);
  console.log('Created Employees:', employees)
}

const updateOne = async () => {
  const updated = await Employee.updateOne({ first_name: 'Grim' }, { first_name: 'The Grim' });
  console.log(updated)
}

const deleteOne = async () => {
  const deleted = await Employee.deleteOne({ first_name: "Naruto" });
  console.log('Deleted Employee:', deleted)
}

const fullNames = async () => {
  const fullList = await Employee.find({}, { first_name: 1, last_name: 1 });
  console.log('Full Names:', fullList)
}


const run = async () => {
  // await findAll()
  // await createOne()
  // await createMany()
  // await updateOne()
  // await deleteOne()
  await fullNames()

  process.exit();
}

run();