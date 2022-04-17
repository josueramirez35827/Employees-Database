const db = require('../db');

const Employee = require('../models/employee');

db.on('error', console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const employees = [
    {
      first_name: "Bruno",
      last_name: "Galvao",
      email: "bruno.galvao@ga.com",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010"
      }
    },
    {
      first_name: "Gumball",
      last_name: "Watterson",
      email: "gumball.watterson@email.com",
      job_title: "Software Developer",
      address: {
        street: "800 Main St",
        city: "Brooklyn",
        state: "NY",
        zip: "15632"
      }
    },
    {
      first_name: "Blossom",
      last_name: "Powerpuff",
      email: "blossom.powerpuff@email.com",
      job_title: "Software Designer",
      address: {
        street: "33 First Ave",
        city: "Townsville",
        state: "NY",
        zip: "12345"
      }
    }

  ];
  await Employee.deleteMany({});
  await Employee.insertMany(employees);
  console.log("Created users!");
};

const run = async () => {
  await main();
  db.close();
}

run()