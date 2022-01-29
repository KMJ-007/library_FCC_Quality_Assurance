# [Personal Library](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/personal-library)






## This project part of free code camp quality assurance module, i learned mocha-chai for testing.  
### live demo [here](https://libraryFCCQualityAssurance.karanmj.repl.co)
  
 
 <br>
 <details>
    <summary>User Stories:</summary>

1. You can send a POST request to /api/books with title as part of the form data to add a book. The returned response will be an object with the title and a unique _id as keys. If title is not included in the request, the returned response should be the string missing required field title.

2. You can send a GET request to /api/books and receive a JSON response representing all the books. The JSON response will be an array of objects with each object (book) containing title, _id, and commentcount properties.

3. You can send a GET request to /api/books/{_id} to retrieve a single object of a book containing the properties title, _id, and a comments array (empty array if no comments present). If no book is found, return the string no book exists.

4. You can send a POST request containing comment as the form body data to /api/books/{_id} to add a comment to a book. The returned response will be the books object similar to GET /api/books/{_id} request in an earlier test. If comment is not included in the request, return the string missing required field comment. If no book is found, return the string no book exists.

5. You can send a DELETE request to /api/books/{_id} to delete a book from the collection. The returned response will be the string delete successful if successful. If no book is found, return the string no book exists.

6. You can send a DELETE request to /api/books to delete all books in the database. The returned response will be the string 'complete delete successful if successful.

7. All 10 functional tests required are complete and passing.
</details>
 <br>

# Technology used to build this project

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)



## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/KMJ-007/library_FCC_Quality_Assurance.git
```

2. Change the working directory

```bash
cd library_FCC_Quality_Assurance
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

5. Run the app

```bash
npm run start
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.


