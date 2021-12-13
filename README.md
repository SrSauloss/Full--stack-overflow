# Full--stack-overflow
<h1 align='center'> Full Stack Overflow </h1>

<p align='center'>An application where people can freely post and answer questions.</p>

## Installation
  
        git clone https://github.com/SrSauloss/Full--stack-overflow.git
        cd Full--stack-overflow
        npm i

## Start 
`npm run dev`

## Requests
+ POST /questions
    - body: 
    ```js
       {
        "question": "Question description",
        "student": "Student name",
        "class": "Class student",
        "tags": "All tags, example: typescript, vida, javascript, java..."
      }
    ```
    - response: status code 201
    
+ POST /questions/:id
    - parameter: id (question id)
      - body: 
    ```js
      {
        "answer": "question answer" 
      }
    ```
    - response: status code 200
    
+ POST /users
    - body: 
    ```js
      {
        "student": "Student name",
        "class": "Class student",
      }
    ```
    - response: 
    ```js
        {
          	"token": "Unique token example: 1234-5678"
        }
    
+ GET /questions/:id
    - response:
: 
    ```js
        {
          "question": "Question description",
          "student": "Student name",
          "class": "Class student",
          "tags": "All tags, example: typescript, vida, javascript, java..."
          "answered": false or true,
          "submitAt": "date it was created example: 2021-01-01 10:12"
        }
    ```
+ GET /questions
    - response:
    ```js
     [
        {
          "id": 123243,
          "question": "Question description",
          "student": "Student name",
          "class": "Class student",
          "submitAt": "date it was created example: 2021-01-01 10:12"
        },
        ...
      ]
    ```
