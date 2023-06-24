import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ResultTableHeader = styled.th`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
`;

const ResultTableCell = styled.td`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
`;

const Card = styled.form`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SaveButton = styled.button`
  margin-top: 20px;
`;

const ProfileInfoComponent = ({ defaultName, defaultBirthdate }) => {
  const [name, setName] = useState(defaultName || 'Shatha Amin');
  const [firstName, setFirstName] = useState('Shatha');
  const [lastName, setLastName] = useState('Amin');
  const [birthdate, setBirthdate] = useState(defaultBirthdate || getCurrentDate());
  const [gender, setGender] = useState('Female');
  const [isEditing, setIsEditing] = useState(false);

  const handleFieldClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  return (
    <Card onSubmit={handleSaveClick}>
      <TextField
        id="name"
        label="Name"
        variant="filled"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        helperText="Helper text"
      />
      <TextField
        id="firstName"
        label="First Name"
        variant="filled"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        helperText="Helper text"
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="filled"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        helperText="Helper text"
      />
      <TextField
        id="birthdate"
        label="Birthdate"
        variant="filled"
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        fullWidth
        helperText="Helper text"
      />
      <TextField
        id="gender"
        label="Gender"
        variant="filled"
        select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        fullWidth
        helperText="Helper text"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </TextField>
      <SaveButton type="submit">Save</SaveButton>

      <ResultTable>
        <tbody>
          <tr onClick={handleFieldClick}>
            <ResultTableHeader>Field</ResultTableHeader>
            <ResultTableHeader>Value</ResultTableHeader>
          </tr>
          <tr onClick={handleFieldClick}>
            <ResultTableCell>NAME</ResultTableCell>
            <ResultTableCell>{name}</ResultTableCell>
          </tr>
          <tr onClick={handleFieldClick}>
            <ResultTableCell>FIRST NAME</ResultTableCell>
            <ResultTableCell>{firstName}</ResultTableCell>
          </tr>
          <tr onClick={handleFieldClick}>
            <ResultTableCell>LAST NAME</ResultTableCell>
            <ResultTableCell>{lastName}</ResultTableCell>
          </tr>
          <tr onClick={handleFieldClick}>
            <ResultTableCell>BIRTHDATE</ResultTableCell>
            <ResultTableCell>{birthdate}</ResultTableCell>
          </tr>
          <tr onClick={handleFieldClick}>
            <ResultTableCell>GENDER</ResultTableCell>
            <ResultTableCell>{gender}</ResultTableCell>
          </tr>
        </tbody>
      </ResultTable>
    </Card>
  );
};

export default ProfileInfoComponent;
