import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Card = styled.form`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  tbody {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
  }
`;

const SaveButton = styled.button`
  margin-top: 20px;
`;

const ProfileInfoComponent = () => {
  const [name, setName] = useState(' ');
  const [Github, setGithub] = useState(' ');
  const [Linkedin, setLinkedin] = useState(' ');
  const [Gmail, setGmail] = useState(' ');
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState('Female');

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSetGithub = (e: ChangeEvent<HTMLInputElement>) => {
    setGithub(e.target.value);
  };
  const handleSetLinkedin = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkedin(e.target.value);
  };
  const handleSetGmail = (e: ChangeEvent<HTMLInputElement>) => {
    setGmail(e.target.value);
  };
  const handleSetbirthdate = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSaveClick = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <Card onSubmit={handleSaveClick}>
      <tbody>
        <tr>
          <TextField
            required
            id="outlined-required"
            label=" NAME(Required)"
            value={name}
            onChange={handleSetName}
            style={{ width: '600px' }}
          />
        </tr>
        <tr>
          <TextField
            required
            id="outlined-required"
            label=" Gmail(Required)"
            value={Gmail}
            onChange={handleSetGmail}
            style={{ width: '600px' }}
          />
        </tr>
        <tr>
          <TextField
            required
            id="outlined-required"
            label=" Linkedin(Required)"
            value={Linkedin}
            onChange={handleSetLinkedin}
            style={{ width: '600px' }}
          />
        </tr>
        <tr>
          <TextField
            required
            id="outlined-required"
            label=" Github(Required)"
            value={Github}
            onChange={handleSetGithub}
            style={{ width: '600px' }}
          />
        </tr>
        <tr>
          <TextField
            required
            id="outlined-required"
            value={birthdate}
            type="date"
            onChange={handleSetbirthdate}
            style={{ width: '600px' }}
          />
        </tr>
        <tr>
          <Select
            id="outlined-required"
            label="Gender(Required)"
            defaultValue=""
            value={gender}
            onChange={handleChange}
            style={{ width: '600px' }}
          >
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </tr>
      </tbody>

      <SaveButton
        type="submit"
        style={{
          backgroundColor: 'blue',
          width: '200px',
          borderRadius: '5px',
          border: '1px solid #ccd0d4 ',
          color: '#eee',
          padding: '10px',
          fontWeight: '600px',
        }}
      >
        Save
      </SaveButton>
    </Card>
  );
};

export default ProfileInfoComponent;
