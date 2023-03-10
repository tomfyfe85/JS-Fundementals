const cohort = { 
  name: 'May2022',
  id: 1234,
  students: ['tom', 'iain', 'joe']
};

const info = (object) => {
  console.log(`${object.name} - ${object.id} - ${object.students.length} students in this object`)
};

console.log(info(cohort));