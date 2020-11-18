import React, { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const peopleData = JSON.parse(localStorage.getItem('people'));
    if (peopleData) {
      setPeople(peopleData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = {
      id: people.length + 1,
      ...formData,
    };

    setPeople([...people, newFormData]);

    setFormData({
      firstName: '',
      lastName: '',
      birthdate: '',
      age: '',
    });
  };

  return (
    <main>
      <section className="container">
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
