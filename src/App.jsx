import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemisList = people.filter(person => 
    person.profession === 'chemist');

  const elselist = people.filter(person => 
    person.profession !== 'chemist');

    return (
    <article>
      <h1>Chemists</h1>
      <ul>
        {chemisList.map(person => 
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h1>Everyone else</h1>
      <ul>
        {elselist.map(person => 
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
   
    </article>
  );
        }