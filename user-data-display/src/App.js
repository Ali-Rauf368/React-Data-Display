import React, { useState, useEffect } from "react";
import "./App.css";
const usersData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
];
const postsData =[
  {
    "userId": 2,
    "id": 11,
    "title": "quam nostrum impedit mollitia quod et dolor"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "consequatur autem doloribus natus consectetur"
  },
  {
    "userId": 2,
    "id": 13,
    "title": "ab rerum non rerum consequatur ut ea unde"
  },
  {
    "userId": 2,
    "id": 14,
    "title": "ducimus molestias eos animi atque nihil"
  },
  {
    "userId": 2,
    "id": 15,
    "title": "ut pariatur rerum ipsum natus repellendus praesentium"
  },
  {
    "userId": 2,
    "id": 16,
    "title": "voluptatem aut maxime inventore autem magnam atque repellat"
  },
  {
    "userId": 2,
    "id": 17,
    "title": "aut minima voluptatem ut velit"
  },
  {
    "userId": 2,
    "id": 18,
    "title": "nesciunt quia et doloremque"
  },
  {
    "userId": 2,
    "id": 19,
    "title": "velit pariatur quaerat similique libero omnis quia"
  },
  {
    "userId": 2,
    "id": 20,
    "title": "voluptas rerum iure ut enim"
  }
];
const photosData =[
  {
    "albumId": 14,
    "id": 651,
    "title": "fugiat quos ullam aut ducimus saepe",
    "url": "https://via.placeholder.com/600/b9173d",
    "thumbnailUrl": "https://via.placeholder.com/150/b9173d"
  },
  {
    "albumId": 14,
    "id": 652,
    "title": "tempore et sit cum aut",
    "url": "https://via.placeholder.com/600/a8b15c",
    "thumbnailUrl": "https://via.placeholder.com/150/a8b15c"
  },
  {
    "albumId": 14,
    "id": 653,
    "title": "temporibus commodi et fugit doloremque reprehenderit exercitationem necessitatibus aut",
    "url": "https://via.placeholder.com/600/429b4a",
    "thumbnailUrl": "https://via.placeholder.com/150/429b4a"
  },
  {
    "albumId": 14,
    "id": 654,
    "title": "optio reprehenderit blanditiis dicta quam assumenda",
    "url": "https://via.placeholder.com/600/cd4c46",
    "thumbnailUrl": "https://via.placeholder.com/150/cd4c46"
  },
  {
    "albumId": 14,
    "id": 655,
    "title": "nulla aut est dolor ipsam tempore saepe rerum",
    "url": "https://via.placeholder.com/600/3cba50",
    "thumbnailUrl": "https://via.placeholder.com/150/3cba50"
  },
  {
    "albumId": 14,
    "id": 656,
    "title": "illo voluptatem perferendis culpa modi laborum et omnis et",
    "url": "https://via.placeholder.com/600/ea7294",
    "thumbnailUrl": "https://via.placeholder.com/150/ea7294"
  },
  {
    "albumId": 14,
    "id": 657,
    "title": "quaerat molestiae sequi",
    "url": "https://via.placeholder.com/600/f24d4f",
    "thumbnailUrl": "https://via.placeholder.com/150/f24d4f"
  },
  {
    "albumId": 14,
    "id": 658,
    "title": "ea necessitatibus natus vel eaque",
    "url": "https://via.placeholder.com/600/6dc8aa",
    "thumbnailUrl": "https://via.placeholder.com/150/6dc8aa"
  },
  {
    "albumId": 14,
    "id": 659,
    "title": "tempore aspernatur dolor doloremque qui at",
    "url": "https://via.placeholder.com/600/1d8c66",
    "thumbnailUrl": "https://via.placeholder.com/150/1d8c66"
  },
  {
    "albumId": 14,
    "id": 660,
    "title": "vero aliquam deleniti porro voluptas quo modi",
    "url": "https://via.placeholder.com/600/f7ea66",
    "thumbnailUrl": "https://via.placeholder.com/150/f7ea66"
  },
  {
    "albumId": 14,
    "id": 661,
    "title": "est ducimus et vitae eos maxime sint quo",
    "url": "https://via.placeholder.com/600/9f3460",
    "thumbnailUrl": "https://via.placeholder.com/150/9f3460"
  },
  {
    "albumId": 14,
    "id": 662,
    "title": "accusamus sed nisi et iste exercitationem optio inventore nam",
    "url": "https://via.placeholder.com/600/291ade",
    "thumbnailUrl": "https://via.placeholder.com/150/291ade"
  },
  {
    "albumId": 14,
    "id": 663,
    "title": "quod velit nam dolores odit nulla et dolorum iure",
    "url": "https://via.placeholder.com/600/410227",
    "thumbnailUrl": "https://via.placeholder.com/150/410227"
  },
  {
    "albumId": 14,
    "id": 664,
    "title": "aut tempore cumque temporibus architecto",
    "url": "https://via.placeholder.com/600/e6cf08",
    "thumbnailUrl": "https://via.placeholder.com/150/e6cf08"
  },
  {
    "albumId": 14,
    "id": 665,
    "title": "quos aliquam ut numquam iste",
    "url": "https://via.placeholder.com/600/658e1b",
    "thumbnailUrl": "https://via.placeholder.com/150/658e1b"
  },
  {
    "albumId": 14,
    "id": 666,
    "title": "voluptatem est dolorem est aspernatur ut reiciendis",
    "url": "https://via.placeholder.com/600/29ba20",
    "thumbnailUrl": "https://via.placeholder.com/150/29ba20"
  },
  {
    "albumId": 14,
    "id": 667,
    "title": "quasi dolore officia",
    "url": "https://via.placeholder.com/600/cd12da",
    "thumbnailUrl": "https://via.placeholder.com/150/cd12da"
  },
  {
    "albumId": 14,
    "id": 668,
    "title": "autem cupiditate in aut cumque dolores",
    "url": "https://via.placeholder.com/600/1fdb6",
    "thumbnailUrl": "https://via.placeholder.com/150/1fdb6"
  },
  {
    "albumId": 14,
    "id": 669,
    "title": "nobis omnis nesciunt pariatur omnis",
    "url": "https://via.placeholder.com/600/ee6830",
    "thumbnailUrl": "https://via.placeholder.com/150/ee6830"
  },
  {
    "albumId": 14,
    "id": 670,
    "title": "quo aut quia quibusdam qui sunt",
    "url": "https://via.placeholder.com/600/c37647",
    "thumbnailUrl": "https://via.placeholder.com/150/c37647"
  },
  {
    "albumId": 14,
    "id": 671,
    "title": "est qui sapiente nulla",
    "url": "https://via.placeholder.com/600/dbb854",
    "thumbnailUrl": "https://via.placeholder.com/150/dbb854"
  },
  {
    "albumId": 14,
    "id": 672,
    "title": "placeat ut expedita necessitatibus voluptatibus et velit maxime explicabo",
    "url": "https://via.placeholder.com/600/acdab4",
    "thumbnailUrl": "https://via.placeholder.com/150/acdab4"
  },
  {
    "albumId": 14,
    "id": 673,
    "title": "consectetur modi et sunt excepturi culpa non autem omnis",
    "url": "https://via.placeholder.com/600/134b6f",
    "thumbnailUrl": "https://via.placeholder.com/150/134b6f"
  },
  {
    "albumId": 14,
    "id": 674,
    "title": "corrupti dolor ratione iure dolores ipsa saepe",
    "url": "https://via.placeholder.com/600/aada02",
    "thumbnailUrl": "https://via.placeholder.com/150/aada02"
  },
  {
    "albumId": 14,
    "id": 675,
    "title": "sit dolorem dolorum corporis inventore id repellendus qui corrupti",
    "url": "https://via.placeholder.com/600/618b39",
    "thumbnailUrl": "https://via.placeholder.com/150/618b39"
  },
  {
    "albumId": 14,
    "id": 676,
    "title": "voluptatibus totam dolorem rerum",
    "url": "https://via.placeholder.com/600/e77fc7",
    "thumbnailUrl": "https://via.placeholder.com/150/e77fc7"
  },
  {
    "albumId": 14,
    "id": 677,
    "title": "neque sed earum itaque veniam aut sapiente",
    "url": "https://via.placeholder.com/600/debbd8",
    "thumbnailUrl": "https://via.placeholder.com/150/debbd8"
  },
  {
    "albumId": 14,
    "id": 678,
    "title": "aut perferendis quaerat vel accusamus laboriosam neque eius omnis",
    "url": "https://via.placeholder.com/600/c3d5b5",
    "thumbnailUrl": "https://via.placeholder.com/150/c3d5b5"
  },
  {
    "albumId": 14,
    "id": 679,
    "title": "eligendi occaecati est et omnis quidem quia",
    "url": "https://via.placeholder.com/600/1db682",
    "thumbnailUrl": "https://via.placeholder.com/150/1db682"
  },
  {
    "albumId": 14,
    "id": 680,
    "title": "itaque sint provident voluptatem repellat in",
    "url": "https://via.placeholder.com/600/5a3361",
    "thumbnailUrl": "https://via.placeholder.com/150/5a3361"
  },
  {
    "albumId": 14,
    "id": 681,
    "title": "quia quibusdam doloremque alias impedit qui quos",
    "url": "https://via.placeholder.com/600/890fb4",
    "thumbnailUrl": "https://via.placeholder.com/150/890fb4"
  },
  {
    "albumId": 14,
    "id": 682,
    "title": "magnam accusantium non et rem odit ut",
    "url": "https://via.placeholder.com/600/29704b",
    "thumbnailUrl": "https://via.placeholder.com/150/29704b"
  },
  {
    "albumId": 14,
    "id": 683,
    "title": "consequatur modi quo deleniti et",
    "url": "https://via.placeholder.com/600/93d440",
    "thumbnailUrl": "https://via.placeholder.com/150/93d440"
  },
  {
    "albumId": 14,
    "id": 684,
    "title": "repudiandae ut omnis aut et eaque molestiae quaerat laborum",
    "url": "https://via.placeholder.com/600/f1a1fb",
    "thumbnailUrl": "https://via.placeholder.com/150/f1a1fb"
  },
  {
    "albumId": 14,
    "id": 685,
    "title": "ut perspiciatis perferendis voluptatum provident voluptatem corrupti aut sed",
    "url": "https://via.placeholder.com/600/9f7892",
    "thumbnailUrl": "https://via.placeholder.com/150/9f7892"
  },
  {
    "albumId": 14,
    "id": 686,
    "title": "aut enim officiis atque molestiae dignissimos saepe",
    "url": "https://via.placeholder.com/600/16ea97",
    "thumbnailUrl": "https://via.placeholder.com/150/16ea97"
  },
  {
    "albumId": 14,
    "id": 687,
    "title": "sed reprehenderit inventore et autem quas molestias",
    "url": "https://via.placeholder.com/600/6dcd59",
    "thumbnailUrl": "https://via.placeholder.com/150/6dcd59"
  },
  {
    "albumId": 14,
    "id": 688,
    "title": "ea pariatur et aliquam illo qui",
    "url": "https://via.placeholder.com/600/e86682",
    "thumbnailUrl": "https://via.placeholder.com/150/e86682"
  },
  {
    "albumId": 14,
    "id": 689,
    "title": "qui voluptate quia id",
    "url": "https://via.placeholder.com/600/fb93b2",
    "thumbnailUrl": "https://via.placeholder.com/150/fb93b2"
  },
  {
    "albumId": 14,
    "id": 690,
    "title": "voluptatum quas voluptates et blanditiis est minus quia",
    "url": "https://via.placeholder.com/600/fab436",
    "thumbnailUrl": "https://via.placeholder.com/150/fab436"
  },
  {
    "albumId": 14,
    "id": 691,
    "title": "itaque tenetur rerum sed eligendi vel sit voluptatibus",
    "url": "https://via.placeholder.com/600/d011ce",
    "thumbnailUrl": "https://via.placeholder.com/150/d011ce"
  },
  {
    "albumId": 14,
    "id": 692,
    "title": "eum vitae sint ex modi culpa sequi ut",
    "url": "https://via.placeholder.com/600/bf6b50",
    "thumbnailUrl": "https://via.placeholder.com/150/bf6b50"
  },
  {
    "albumId": 14,
    "id": 693,
    "title": "omnis dignissimos rerum deserunt inventore odio asperiores ut",
    "url": "https://via.placeholder.com/600/c828eb",
    "thumbnailUrl": "https://via.placeholder.com/150/c828eb"
  },
  {
    "albumId": 14,
    "id": 694,
    "title": "voluptatem sapiente placeat",
    "url": "https://via.placeholder.com/600/46c7c2",
    "thumbnailUrl": "https://via.placeholder.com/150/46c7c2"
  },
  {
    "albumId": 14,
    "id": 695,
    "title": "vel labore ut quos odio sed ut et",
    "url": "https://via.placeholder.com/600/1b6158",
    "thumbnailUrl": "https://via.placeholder.com/150/1b6158"
  },
  {
    "albumId": 14,
    "id": 696,
    "title": "in ut fugit eos eos error",
    "url": "https://via.placeholder.com/600/128c02",
    "thumbnailUrl": "https://via.placeholder.com/150/128c02"
  },
  {
    "albumId": 14,
    "id": 697,
    "title": "nam reiciendis molestiae voluptas ut omnis quis doloribus",
    "url": "https://via.placeholder.com/600/dcba95",
    "thumbnailUrl": "https://via.placeholder.com/150/dcba95"
  },
  {
    "albumId": 14,
    "id": 698,
    "title": "quia perspiciatis molestiae",
    "url": "https://via.placeholder.com/600/dd6116",
    "thumbnailUrl": "https://via.placeholder.com/150/dd6116"
  },
  {
    "albumId": 14,
    "id": 699,
    "title": "et dolores provident molestias quaerat error omnis",
    "url": "https://via.placeholder.com/600/8d9441",
    "thumbnailUrl": "https://via.placeholder.com/150/8d9441"
  },
  {
    "albumId": 14,
    "id": 700,
    "title": "possimus voluptas dolore",
    "url": "https://via.placeholder.com/600/f7aea9",
    "thumbnailUrl": "https://via.placeholder.com/150/f7aea9"
  }
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
 
    setUsers(usersData);
    setPosts(postsData);
    setPhotos(photosData);
  }, []);



  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <h2>{user.name} ({user.username})</h2>
          <p>Email: {user.email}</p>
          <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <p>Company: {user.company.name} - {user.company.catchPhrase}</p>

          <h3>Posts</h3>
          <ul>
            {posts.filter(post => post.userId === user.id).map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>

          <h3>Photos</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {photos.slice(0, 5).map(photo => (
              <div key={photo.id} style={{ margin: '10px' }}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;