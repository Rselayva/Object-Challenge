// Step 1
const library = [
    {
      title: "Book 1",
      author: "Author 1",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Book 2",
      author: "Author 2",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Book 3",
      author: "Author 3",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
library[0].title = 'firstBook';
console.log(library[0].title);

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

