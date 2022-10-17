kitis_Bank is a Banking Application built with Node.js. It is capable of providing the users with the APIS with which to

1. Create
2. Read
3. Update and
4. Delete accounts stored in a MongoDB Atlas Database.

Example of a Read Operation (reading a bank account using it's ID)

{
    "status": "success",
    "data": {
        "account": {
            "name": {
                "middlename": "Charles",
                "firstname": "Ifeanyi",
                "lastname": "Nwankiti"
            },
            "dateOpened": "2022-10-14T10:02:09.557Z",
            "accountBalance": 3500,
            "accountType": "current",
            "ATM": false,
            "_id": "63493410426fa54f4cecf247",
            "stateOfOrigin": "Anambra",
            "email": "princeiggy09@gmail.com",
            "yearOfBirth": 1992,
            "transactionHistory": [
                {
                    "amount": 3500,
                    "date": "2022-10-14T10:02:09.557Z",
                    "_id": "63493410426fa54f4cecf248"
                }
            ],
            "__v": 0
        }
    }
}

It also provides APIs that give critical insight with stats like

1. Total money in the bank available for transactions
2. Number of active savings account
3. Number of active Current Account

Example of Stats displayed by the API
{
    "status": "success",
    "data": {
        "stats": [
            {
                "_id": null,
                "availableCashAggregate": 17000,
                "activeSavingsAccounts": 2,
                "affluentCustomers": [
                    {
                        "middlename": "Evans",
                        "firstname": "Chidiebere",
                        "lastname": "Nwankiti"
                    },
                    {
                        "middlename": "Sandra",
                        "firstname": "Chioma",
                        "lastname": "Nwankiti"
                    }
                ]
            }
        ]
    }
}

Concepts applied

1. MongoDB Aggregation Pipeline
2. Alias Routing

Technology Used

1. MongoDB Atlas
2. Express
3. Node.JS
4. Mongoose
