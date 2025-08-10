import React from 'react';

const educationData = [
  {
    id: 1,
    degree: 'Diploma in Engineering (Computer Science & Technology)',
    institute: 'Borak Polytechnic Institute',
    session: '2022 - Present',
    details: 'Currently enrolled, focusing on Web development and computer science fundamentals.',
  },
  {
    id: 2,
    degree: 'Secondary School Certificate (SSC)',
    institute: 'Baliakandi Pilot Model High School',
    session: 'Completed in 2022',
    details: 'Completed SSC with a focus on Commerce subjects.',
  },
 
];

const Education = () => {
  return (
    <section id='education' className=" w-11/12 mx-auto my-20 px-4">
      <h2 className="text-4xl font-bold  text-gray-900 mb-10 text-center">Education</h2>
      <div className="space-y-8">
        {educationData.map(({ id, degree, institute, session, details }) => (
          <div
            key={id}
            className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">{degree}</h3>
            <p className="text-gray-700 font-medium">{institute}</p>
            <p className="text-gray-500 italic">{session}</p>
            <p className="mt-2 text-gray-600">{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
