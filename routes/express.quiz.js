const express = require('express');
const router = express.Router();
// const QuizList = require('../Data/Data');

const QuizList = [
    {
        id: "2b8f9ebc-f444-11eb-9a03-0242ac130003",
        name: "The blockchain quiz",
        cover: "",
        totalScore: 50,
        questions: [
            {
                question: "Who created Bitcoin?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "Satoshi Nakamoto",
                        isAnswer: true
                    },
                    {
                        text: "Eric Hughes",
                        isAnswer: false
                    },
                    {
                        text: "Vitalik Buterin",
                        isAnswer: false
                    },
                    {
                        text: "China",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is a miner?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "A type of blockchain",
                        isAnswer: false
                    },
                    {
                        text: "An algorithm that predicts the next part of the chain",
                        isAnswer: false
                    },
                    {
                        text: "A person doing calculations to verify a transaction",
                        isAnswer: false
                    },
                    {
                        text: "Computers that validate and process blockchain transactions",
                        isAnswer: true
                    }
                ]
            },
            {
                question: "What is a blockchain?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: " A distributed ledger on a peer to peer network",
                        isAnswer: false
                    },
                    {
                        text: "A type of cryptocurrency",
                        isAnswer: false
                    },
                    {
                        text: "An exchange",
                        isAnswer: true
                    },
                    {
                        text: "A centralized ledger",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is a genesis block?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: " The first block of a Blockchain",
                        isAnswer: false
                    },
                    {
                        text: "A famous block that hardcoded a hash of the Book of Genesis onto the blockchain",
                        isAnswer: false
                    },
                    {
                        text: "The first block after each block halving",
                        isAnswer: true
                    },
                    {
                        text: "The 2nd transaction of a Blockchain",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is a dApp?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "A type of Cryptocurrency",
                        isAnswer: false
                    },
                    {
                        text: "A condiment",
                        isAnswer: false
                    },
                    {
                        text: "A type of blockchain",
                        isAnswer: true
                    },
                    {
                        text: "A decentralized application",
                        isAnswer: false
                    }
                ]
            }
        ]
    },
    {
        id: "43c67636-f444-11eb-9a03-0242ac130003",
        name: "The Sneaker head quiz",
        cover: "",
        totalScore: 50,
        questions: [
            {
                question: "Which famous rapper collaborated with Nike, and then Adidas, to create Yeezy?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "Jay-Z",
                        isAnswer: false
                    },
                    {
                        text: "Kanye West",
                        isAnswer: false
                    },
                    {
                        text: "Drake",
                        isAnswer: true
                    },
                    {
                        text: "Future",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "How many shoes are in the Air Jordan collection?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "10",
                        isAnswer: false
                    },
                    {
                        text: "56",
                        isAnswer: false
                    },
                    {
                        text: "32",
                        isAnswer: true
                    },
                    {
                        text: "23",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "Which of these artists has also collaborated with Adidas?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "Pharrell Williams",
                        isAnswer: true
                    },
                    {
                        text: "Eminem",
                        isAnswer: false
                    },
                    {
                        text: "Kendrick Lamar",
                        isAnswer: false
                    },
                    {
                        text: "Rihanna",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "Which one of these is NOT a sneaker store?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "Kith",
                        isAnswer: false
                    },
                    {
                        text: "Complex",
                        isAnswer: true
                    },
                    {
                        text: "Bodega",
                        isAnswer: false
                    },
                    {
                        text: "Stadium Goods",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "Which rap group was responsible for putting the Adidas Superstars on the map?",
                points: 10,
                negativePoints: 10,
                options: [
                    {
                        text: "Wu-Tang Clan",
                        isAnswer: false
                    },
                    {
                        text: "Run-D.M.C.",
                        isAnswer: true
                    },
                    {
                        text: "N.W.A.",
                        isAnswer: false
                    },
                    {
                        text: "Bell BivDevoe",
                        isAnswer: false
                    }
                ]
            }
        ]
    }
]

const questions = [
    {
      quizId: "dfjsak2",
      quizName: "How are you!",
      points: 5,
      questions: [
        {
          question: "How are you",
          options: [
            {
              text: "fine",
              isRight: true
            },
            {
              text: "thank you",
              isRight: false
            },
            {
              text: "thank you",
              isRight: false
            },
          ]
        },
        {
          question: "How Was your day?",
          options: [
            {
              text: "it was fine",
              isRight: true
            },
            {
              text: "it was bad",
              isRight: false
            }
          ]
        }
      ]
    },
    {
      quizId: "dfjsa22",
      quizName: "What ur name!",
      points: 5,
      questions: [
        {
          question: "is your name Vishal",
          options: [
            {
              text: "noe",
              isRight: false
            },
            {
              text: "yes",
              isRight: true
            }
          ]
        },
        {
          question: "do you have gf",
          options: [
            {
              text: "noe",
              isRight: true
            },
            {
              text: "yes",
              isRight: false
            }
          ]
        }
      ]
    },
  
    {
      quizId: "dfjsa224",
      quizName: "The blockchain quiz",
      quizImage: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/11/what-is-crypto.jpg",
      points: 10,
      questions: [
        {
          question: "Who created Bitcoin?",
          options: [
            {
              text: "Satoshi Nakamoto",
              isRight: true
            },
            {
              text: "Eric Hughes",
              isRight: false
            },
            {
              text: "Vitalik Buterin",
              isRight: false
            },
            {
              text: "China",
              isRight: false
            }
          ]
        },
        {
          question: "What is a miner?",
          options: [
            {
              text: "A type of blockchain",
              isRight: false
            },
            {
              text: "An algorithm that predicts the next part of the chain",
              isRight: false
            },
            {
              text: "A person doing calculations to verify a transaction",
              isRight: false
            },
            {
              text: "Computers that validate and process blockchain transactions",
              isRight: true
            }
          ]
        },
        {
          question: "What is a blockchain?",
          options: [
            {
              text: "A distributed ledger on a peer to peer network",
              isRight: true
            },
            {
              text: "A type of cryptocurrency",
              isRight: false
            },
            {
              text: "An exchange",
              isRight: false
            },
            {
              text: "A centralized ledger",
              isRight: false
            }
          ]
        },
        {
          question: "What is a genesis block?",
          options: [
            {
              text: " The first block of a Blockchain",
              isRight: true
            },
            {
              text: "A famous block that hardcoded a hash of the Book of Genesis onto the blockchain",
              isRight: false
            },
            {
              text: "The first block after each block halving",
              isRight: false
            },
            {
              text: "The 2nd transaction of a Blockchain",
              isRight: false
            }
          ]
        },
        {
          question: "What is a dApp?",
          options: [
            {
              text: "A type of Cryptocurrency",
              isRight: false
            },
            {
              text: "A condiment",
              isRight: false
            },
            {
              text: "A type of blockchain",
              isRight: false
            },
            {
              text: "A decentralized application",
              isRight: true
            }
          ]
        },
      ]
    },
    {
      quizId: "dfjsa124",
      quizName: "The Sneaker head quiz",
      quizImage: "https://sneakerize.gr/wp-content/uploads/2018/12/Sneaker-Feature-.jpg",
      points: 10,
      questions: [
        {
          question: "Which famous rapper collaborated with Nike, and then Adidas, to create Yeezy?",
          options: [
            {
              text: "Jay-Z",
              isRight: false
            },
            {
              text: "Kanye West",
              isRight: true
            },
            {
              text: "Drake",
              isRight: false
            },
            {
              text: "Future",
              isRight: false
            }
          ]
        },
        {
          question: "How many shoes are in the Air Jordan collection?",
          options: [
            {
              text: "10",
              isRight: false
            },
            {
              text: "56",
              isRight: false
            },
            {
              text: "32",
              isRight: true
            },
            {
              text: "23",
              isRight: false
            }
          ]
        },
        {
          question: "Which of these artists has also collaborated with Adidas?",
          options: [
            {
              text: "Pharrell Williams",
              isRight: true
            },
            {
              text: "Eminem",
              isRight: false
            },
            {
              text: "Kendrick Lamar",
              isRight: false
            },
            {
              text: "Rihanna",
              isRight: false
            }
          ]
        },
        {
          question: "Which one of these is NOT a sneaker store?",
          options: [
            {
              text: "Kith",
              isRight: false
            },
            {
              text: "Complex",
              isRight: true
            },
            {
              text: "Bodega",
              isRight: false
            },
            {
              text: "Stadium Goods",
              isRight: false
            }
          ]
        },
        {
          question: "Which rap group was responsible for putting the Adidas Superstars on the map?",
          options: [
            {
              text: "Wu-Tang Clan",
              isRight: false
            },
            {
              text: "Run-D.M.C.",
              isRight: true
            },
            {
              text: "N.W.A.",
              isRight: false
            },
            {
              text: "Bell BivDevoe",
              isRight: false
            }
          ]
        },
      ]
    },
  ];


router.route('/')
    .get(async (req, res) => {
        res.json({ success: true, quizList: questions })
    })

module.exports = router;