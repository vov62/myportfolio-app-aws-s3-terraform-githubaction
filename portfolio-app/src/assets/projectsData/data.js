import forest from "../../images/forest.png";
import VovRecords from "../../images/vinyl project hero.png";
import workout from "../../images/workout project.png";
import movies from "../../images/movies.png";
import git from "../../images/git3.png";
import todo from "../../images/todo3.png";
import weather from "../../images/weather.png";
import pokemon from "../../images/pokemon aws.png";

const projects = [
  {
    id: 1,
    name: "Pokemon app",
    description:
      "terminal-based application using Python Boto3, AWS infrastructure with Terraform and DynamoDB as the database",
    img: pokemon,
    url: "https://github.com/vov62/PokeApi-Project-Python-AWS-DynamoaDB-Terraform",
    github:
      "https://github.com/vov62/PokeApi-Project-Python-AWS-DynamoaDB-Terraform",
  },
  {
    id: 2,
    name: "weather",
    description: "Weather spp, Search for city forecast and next 5 days ",
    img: weather,
    url: "https://weather-app-avivovgen.netlify.app/",
    github: "https://github.com/vov62/Avi-Vovgen-Abra-Weather-app",
  },

  {
    id: 3,
    name: "Forest Group Estate",
    description: "Frontend Project for Real Estate Agency called 'Forest Group",
    img: forest,
    url: "https://forest-group-estate.netlify.app/",
    github: "https://github.com/vov62/Forest-Group-app",
  },
  {
    id: 4,
    name: "Vov Records",
    description:
      "Vinyl records E-commerce app, search for your favorite vinyl record",
    img: VovRecords,
    url: "https://vov-records.netlify.app/",
    github: "https://github.com/vov62/frontend-vinylstore-project",
  },
  {
    id: 5,
    name: "workout-tracker-app",
    description:
      "MERN-workout-tracker-app,This app allows users to register and track their gym workouts",
    img: workout,
    url: "https://vov-workout-app.herokuapp.com/login",
    github: "https://github.com/vov62/MERN-workout-app",
  },
  {
    id: 6,
    name: "movies",
    description: "Movies app, search for your favorite movie.",
    img: movies,
    url: "https://github.com/vov62/React-Movies-App",
    github: "https://github.com/vov62/React-Movies-App",
  },
  {
    id: 7,
    name: "github",
    description:
      "Github users app, find any user on github and explore his repos",
    img: git,
    url: "https://github.com/vov62/github-front-project",
    github: "https://github.com/vov62/github-front-project",
  },
  {
    id: 8,
    name: "todo",
    description: "Todo crud app, read, create, delete and update your task",
    img: todo,
    url: "https://github.com/vov62/ToDo-app",
    github: "https://github.com/vov62/ToDo-app",
  },
];

export default projects;
