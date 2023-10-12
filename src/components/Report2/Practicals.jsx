/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Badge from '../Badge';
import Underline from '../Underline';

function CellComponent({ title, texts, width }) {
  return (
    <div>
      <Underline width="100%" />
      <Badge text={title} width={width && width} />
      <div style={{
        display: 'flex',
      }}
      >
        {texts.map((text) => (
          <Badge key={text.id} text={text.name} />
        ))}

      </div>
      <div style={{
        display: 'flex',
      }}
      >
        {texts.map((text) => (
          <input
            key={text.id}
            placeholder="GOOD"
            style={{
              width: '12%',
              marginRight: '5px',
              border: '0',
              outline: 'none',
              fontWeight: 'bold',
              textAlign: 'center',

            }}
          />
        ))}
      </div>

      {/* numbers */}
    </div>
  );
}

CellComponent.propTypes = {
  title: PropTypes.string,
  texts: PropTypes.array,
  width: PropTypes.string,

};

const texts = [{
  id: nanoid(),
  name: 'Repeating',
},
{
  id: nanoid(),
  name: 'Copying',
},
{
  id: nanoid(),
  name: 'Recognition',
},
{
  id: nanoid(),
  name: 'Writing',
},
{
  id: nanoid(),
  name: 'Reading',
},
];

// NUMBERS
const numbersText = [{
  id: nanoid(),
  name: 'Counting',
},
{
  id: nanoid(),
  name: 'Copying',
},
{
  id: nanoid(),
  name: 'Recognition',
},
{
  id: nanoid(),
  name: 'Writing',
},
{
  id: nanoid(),
  name: 'Reading',
},
];

function Practicals() {
  return (
    <div>

      {/* numbers */}
      <CellComponent title="ALPHABET" texts={texts} />
      <CellComponent title="NUMBERS" texts={numbersText} />
      <CellComponent title="ENGLISH" texts={numbersText} />
      <CellComponent title="STORY" texts={numbersText} />
      <CellComponent title="CREATIVITY" texts={numbersText} />
      <CellComponent title="PHYSICAL EDUCATION" width="25%" texts={numbersText} />
      <CellComponent title="SELFCARE" texts={numbersText} />
      <CellComponent title="GENERAL CONDUCT" width="20%" texts={numbersText} />

    </div>
  );
}

export default Practicals;
