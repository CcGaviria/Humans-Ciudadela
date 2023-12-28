import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Header from '@/components/Header';
import ItemCardCharacter from '@/components/ItemCardCharacter';

export default function Humans() {
    
    const getItemCharacter = (character: CharacterType) => {
        return (<>
            <ItemCardCharacter character={character} ></ItemCardCharacter>

        </>)

    };
    const GET_HUMANS = gql`
    query {
        characters(
            page: 2, filter: { species: "Human" }, 
        ) {
          info {
            count,
            pages,
            next
          }
          results {
            name,
            species,
            gender,
            status,
            type,
            episode {
              name
            }
            origin {
              name
            },
            location {
              name
            },
            image,
          }, 
          
        }  
      }
`;

    const data = {
        "data": {
            "characters": {
                "info": {
                    "count": 434,
                    "pages": 22,
                    "next": 3
                },
                "results": [
                    {
                        "name": "Beth Sanchez",
                        "species": "Human",
                        "gender": "Female",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "Rixty Minutes"
                            }
                        ],
                        "origin": {
                            "name": "Earth (C-500A)"
                        },
                        "location": {
                            "name": "Earth (C-500A)"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/37.jpeg"
                    },
                    {
                        "name": "Beth Smith",
                        "species": "Human",
                        "gender": "Female",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "Pilot"
                            },
                            {
                                "name": "Lawnmower Dog"
                            },
                            {
                                "name": "Anatomy Park"
                            },
                            {
                                "name": "M. Night Shaym-Aliens!"
                            },
                            {
                                "name": "Meeseeks and Destroy"
                            },
                            {
                                "name": "Rick Potion #9"
                            },
                            {
                                "name": "The Rickshank Rickdemption"
                            },
                            {
                                "name": "Rickmurai Jack"
                            }
                        ],
                        "origin": {
                            "name": "Earth (C-137)"
                        },
                        "location": {
                            "name": "Earth (C-137)"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
                    },
                    {
                        "name": "Beth Smith",
                        "species": "Human",
                        "gender": "Female",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "Close Rick-counters of the Rick Kind"
                            }
                        ],
                        "origin": {
                            "name": "Earth (Evil Rick's Target Dimension)"
                        },
                        "location": {
                            "name": "Earth (Evil Rick's Target Dimension)"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/39.jpeg"
                    },
                    {
                        "name": "Big Head Morty",
                        "species": "Human",
                        "gender": "Male",
                        "status": "unknown",
                        "type": "Human with giant head",
                        "episode": [
                            {
                                "name": "The Rickshank Rickdemption"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/42.jpeg"
                    },
                    {
                        "name": "Big Morty",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "The Ricklantis Mixup"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/43.jpeg"
                    },
                    {
                        "name": "Body Guard Morty",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "The Ricklantis Mixup"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/44.jpeg"
                    },
                    {
                        "name": "Bill",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "Anatomy Park"
                            }
                        ],
                        "origin": {
                            "name": "Earth (C-137)"
                        },
                        "location": {
                            "name": "Earth (C-137)"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/45.jpeg"
                    },
                    {
                        "name": "Black Rick",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "The Rickshank Rickdemption"
                            },
                            {
                                "name": "The Ricklantis Mixup"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg"
                    },
                    {
                        "name": "Blue Footprint Guy",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "Rickmancing the Stone"
                            }
                        ],
                        "origin": {
                            "name": "Post-Apocalyptic Earth"
                        },
                        "location": {
                            "name": "Post-Apocalyptic Earth"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/52.jpeg"
                    },
                    {
                        "name": "Blue Shirt Morty",
                        "species": "Human",
                        "gender": "Male",
                        "status": "unknown",
                        "type": "",
                        "episode": [
                            {
                                "name": "Close Rick-counters of the Rick Kind"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/53.jpeg"
                    },
                    {
                        "name": "Bobby Moynihan",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "Rixty Minutes"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Interdimensional Cable"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/54.jpeg"
                    },
                    {
                        "name": "Bootleg Portal Chemist Rick",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "The Ricklantis Mixup"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg"
                    },
                    {
                        "name": "Brad",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Alive",
                        "type": "",
                        "episode": [
                            {
                                "name": "Rick Potion #9"
                            },
                            {
                                "name": "Ricksy Business"
                            },
                            {
                                "name": "The ABC's of Beth"
                            },
                            {
                                "name": "Amortycan Grickfitti"
                            }
                        ],
                        "origin": {
                            "name": "Earth (Replacement Dimension)"
                        },
                        "location": {
                            "name": "Earth (Replacement Dimension)"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/58.jpeg"
                    },
                    {
                        "name": "Brad Anderson",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "Raising Gazorpazorp"
                            }
                        ],
                        "origin": {
                            "name": "Earth (Replacement Dimension)"
                        },
                        "location": {
                            "name": "Earth (Replacement Dimension)"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/59.jpeg"
                    },
                    {
                        "name": "Calypso",
                        "species": "Human",
                        "gender": "Female",
                        "status": "Dead",
                        "type": "Superhuman",
                        "episode": [
                            {
                                "name": "Vindicators 3: The Return of Worldender"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "unknown"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/60.jpeg"
                    },
                    {
                        "name": "Campaign Manager Morty",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "The Ricklantis Mixup"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/61.jpeg"
                    },
                    {
                        "name": "Chris",
                        "species": "Humanoid",
                        "gender": "Male",
                        "status": "Alive",
                        "type": "Microverse inhabitant",
                        "episode": [
                            {
                                "name": "The Ricks Must Be Crazy"
                            }
                        ],
                        "origin": {
                            "name": "Rick's Battery Microverse"
                        },
                        "location": {
                            "name": "Rick's Battery Microverse"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/65.jpeg"
                    },
                    {
                        "name": "Colossus",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "Rickmancing the Stone"
                            }
                        ],
                        "origin": {
                            "name": "Post-Apocalyptic Earth"
                        },
                        "location": {
                            "name": "Post-Apocalyptic Earth"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/68.jpeg"
                    },
                    {
                        "name": "Commander Rick",
                        "species": "Human",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "The Rickshank Rickdemption"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "Citadel of Ricks"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg"
                    },
                    {
                        "name": "Concerto",
                        "species": "Humanoid",
                        "gender": "Male",
                        "status": "Dead",
                        "type": "",
                        "episode": [
                            {
                                "name": "Pickle Rick"
                            }
                        ],
                        "origin": {
                            "name": "unknown"
                        },
                        "location": {
                            "name": "unknown"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/70.jpeg"
                    }
                ]
            }
        }
    };

    let characters_data = [];
    for (let character of data.data['characters']['results']) {
        characters_data.push(getItemCharacter(character));
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header title="HUMANOS RICK AND MORTY"></Header>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left flex lg:grid-cols-4 justify-center align-center">
                {characters_data}
            </div>
        </main>
    )
}