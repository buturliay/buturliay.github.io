export interface Book {
  title: string;
  author: string;
  dateRead: string;
  rating: number;
  currentlyReading?: boolean;
}

export const booksData: Book[] = [
  {
    title: "The White Album",
    author: "Joan Didion",
    dateRead: "Currently Reading",
    rating: 0,
    currentlyReading: true
  },
  {
    title: "The Fall",
    author: "Albert Camus",
    dateRead: "March 2025",
    rating: 5
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    dateRead: "January 2025",
    rating: 3
  },
  {
    title: "Babel",
    author: "R.F. Kuang",
    dateRead: "December 2024",
    rating: 4
  },
  {
    title: "Intermezzo",
    author: "Sally Rooney",
    dateRead: "December 2024",
    rating: 2
  },
  {
    title: "The Frugal Wizard's Handbook for Surviving Medieval England",
    author: "Brandon Sanderson",
    dateRead: "December 2024",
    rating: 3
  },
  {
    title: "Crooked Kingdom",
    author: "Leigh Bardugo",
    dateRead: "December 2024",
    rating: 5
  },
  {
    title: "Six of Crows",
    author: "Leigh Bardugo",
    dateRead: "December 2024",
    rating: 5
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes Saavedra",
    dateRead: "December 2024",
    rating: 3
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    dateRead: "December 2024",
    rating: 3
  },
  {
    title: "Divergent",
    author: "Veronica Roth",
    dateRead: "December 2024",
    rating: 2
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    dateRead: "December 2024",
    rating: 4
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    dateRead: "December 2024",
    rating: 5
  },
  {
    title: "The Fires of Vengeance",
    author: "Evan Winter",
    dateRead: "December 2024",
    rating: 4
  },
  {
    title: "The Rage of Dragons",
    author: "Evan Winter",
    dateRead: "December 2024",
    rating: 4
  },
  {
    title: "The Inheritance Games",
    author: "Jennifer Lynn Barnes",
    dateRead: "December 2024",
    rating: 2
  },
  {
    title: "The Atlas Six",
    author: "Olivie Blake",
    dateRead: "December 2024",
    rating: 3
  },
  {
    title: "This Is How You Lose the Time War",
    author: "Amal El-Mohtar",
    dateRead: "December 2024",
    rating: 5
  },
  {
    title: "The Midnight Feast",
    author: "Lucy Foley",
    dateRead: "August 2024",
    rating: 4
  },
  {
    title: "My Year of Rest and Relaxation",
    author: "Ottessa Moshfegh",
    dateRead: "August 2024",
    rating: 5
  },
  {
    title: "As Good As Dead",
    author: "Holly Jackson",
    dateRead: "August 2024",
    rating: 5
  },
  {
    title: "Good Girl, Bad Blood",
    author: "Holly Jackson",
    dateRead: "August 2024",
    rating: 5
  },
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    dateRead: "August 2024",
    rating: 5
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    dateRead: "August 2024",
    rating: 5
  },
  {
    title: "Murder Your Employer",
    author: "Rupert Holmes",
    dateRead: "July 2024",
    rating: 3
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    dateRead: "July 2024",
    rating: 4
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    dateRead: "March 2024",
    rating: 4
  }
]; 