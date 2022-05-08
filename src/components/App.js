import * as React from 'react';
import { useState } from 'react';

import CardList from './CardList';
import Form from './Form';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

export function App(props) {
  const [profiles, setProfile] = useState([...testData]);
  const addNewProfile = ((newProfile) => {
    setProfile([...profiles, newProfile])
  });
  return (
    <div className='container'>
      <div className="header">{props.title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}


