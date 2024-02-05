import UserCard from '../../molecules/UserCard';
const RolodexGroup = () => {
  const arr = [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg'
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg'
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://reqres.in/img/faces/10-image.jpg'
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg'
    },
    {
      id: 12,
      email: 'george.edwards@reqres.in',
      first_name: 'George1',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg'
    },
    {
      id: 13,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
    },
    {
      id: 14,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel1',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
    },
    {
      id: 15,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rituja',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
  ];

  const getFilteredArr = (users: any) => {
    return users.reduce((acc: any, curr: any) => {
      let nameFirstChar: string = curr.first_name.charAt(0).toLowerCase();
      if (nameFirstChar) {
        const currentItems = acc[nameFirstChar];
        return {
          ...acc,
          [nameFirstChar]: currentItems ? [...currentItems, curr] : [curr]
        };
      }
      return acc;
    }, {});
  };

  const newArray = getFilteredArr(arr);
  return (
    <>
      <div>
        {Object.keys(newArray).map((key) => {
          return (
            <div key={key}>
              <h2>{key}</h2>
              {newArray[key]?.map((user: any) => (
                <UserCard className="user" key={user.id} user={user} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RolodexGroup;
