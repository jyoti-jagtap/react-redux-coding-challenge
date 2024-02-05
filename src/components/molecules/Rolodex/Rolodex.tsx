import React, { useState, useEffect } from 'react';
import './Rolodex.sass';
import Button from '@mui/material/Button';
import classnames from 'classnames';
const Rolodex = ({ handleAlphabet, selectedAlphabet }: any) => {
  const [currentActive, setCurrentActive] = useState('');
  const [alphabet, setAlphabet] = useState<String[]>([]);
  useEffect(() => {
    if (selectedAlphabet !== null) {
      setAlphabet(selectedAlphabet);
    }
  }, [selectedAlphabet]);

  const handleAlphabetClick = (e: any) => {
    e.preventDefault();

    setCurrentActive(e.target.value.toUpperCase());
    setAlphabet(e.target.value);
    handleAlphabet(e.target.value);
  };
  const prepareAlphabets = () => {
    let result = [];
    for (let i = 65; i < 91; i++) {
      let btnClass = classnames({
        active: currentActive === String.fromCharCode(i),
        selected: alphabet.includes(String.fromCharCode(i))
      });

      result.push(
        <Button
          variant="text"
          key={i}
          onClick={handleAlphabetClick}
          value={String.fromCharCode(i)}
          className={btnClass}
        >
          {' '}
          {String.fromCharCode(i)}
        </Button>
      );
    }
    return result;
  };

  return (
    <section className="alphabets-container">
      {prepareAlphabets ? prepareAlphabets() : null}
    </section>
  );
};

export default Rolodex;
