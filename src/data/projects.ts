export interface Project {
  title: string;
  description: string;
  tools: string[];
}

export const projectsData: Project[] = [
  {
    title: 'Connections Solver',
    description: 'An AI Model capable of classifying words into categories based on semantic similarity, designed in the style of the New York Times\' Connections game.',
    tools: ['Python', 'Pygame', 'Word2Vec', 'Hidden Markov Model']
  },
  {
    title: 'Northeastern Women In Pre-Law Website',
    description: 'Still under construction! An informative website for Northeastern Women In Pre-Law.',
    tools: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
  },
  {
    title: 'Stock Explorer',
    description: 'Leveraged an API to create an interactive model of stock portfolio. In line with the MVC model and equipped with a complete GUI, this educational tool is capable of various calculations such as moving averages, as well as stock trading simulations.',
    tools: ['Java', 'Object Oriented Design', 'Model View Controller', 'Pair Programming', 'Unit Testing']
  }
]; 