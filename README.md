# Find my profession

Technical test to Find My Profession, using ReactJS.

[![Homepage](https://i.ibb.co/DM7T25r/homepage.png)](https://find-my-profession.vercel.app/)

---

## Deployment and access

To prevent configuration problems, the project was deployed using <a href="https://vercel.com/">Vercel</a> and <a href="http://heroku.com/">Heroku</a>.

The main app can be accessed by clicking <a rel="noreferrer" target="_blank" href="https://find-my-profession.vercel.app/">here</a>. Vercel is responsible for the front-end environment, built with <a href="https://pt-br.reactjs.org/">ReactJS</a>. 

The app gets all the data by HTTP Requests in a Heroku server, built with <a href="https://expressjs.com/pt-br/">ExpressJS</a>. The API Documentation can be found by clicking <a className="nav-link" rel="noreferrer" target="_blank" href="https://app.swaggerhub.com/apis-docs/JonathanLemes/Find-my-profession/">here</a>.
>**Note:** as a Free Heroku server, the ExpressJS app is slower in the first execution after a while, so probably your first access will be longer than usual.

Also in Heroku, there is another server running, responsible for the database built with <a href="https://www.postgresql.org/">PostgreSQL</a>. The data was inserted via <a href="https://insomnia.rest/">Insomnia</a>, using the REST API.

---

## Front-End

The ReactJS app was built following the steps at the Practical skills assessment PDF. As requested, I focused on building a clear and understandable code, without adding new funcionalities to it. Although the App.tsx has the base code for rendering the SPA, the routes through pages are made by routes.tsx, using the lib *react-router-dom*. The routing through the Pricing pages are made by the url inserted at the Service Table.

A good addition to the base code could be the implementation of the React App with <a href="https://nextjs.org/">NextJS</a>, to be possible to work with SEO by it's smart SSR tools, without overcharging the Vercel server.

The front-end was implemented with all the funcionalities at the PDF, and although the data collection functions were made in the same files that the Front-End, another approach for the design pattern could be the segmentation of those in different files and classes for a better understanding of the business rules.

---

## Back-end

For the Back-End, I decided to use a relational database: "PostgreSQL". The database contains the tables Services, Tiers, TierDescriprions and Users. Each Tier has a relation with a Service, and each TierDescription with a Tier (*1:n* relations). The Users table storages the data of a purchase of the User (basically, the data from the Checkout page), but could easilly be used with another table with, for example, Username and Password_hash, also with a *1:n* relation.
>**Note:** the Checkout data at Users is available in: <a href="https://glacial-earth-21066.herokuapp.com/users">https://glacial-earth-21066.herokuapp.com/users</a>

I used Type-ORM for a better programming experience, because it allows developers to easily change the database type with just one variable (or a different *ormconfig.json* file), keeping the same code structure with the same migrations. In this way, the tests could be made without using the PostgreSQL database, but a SQLite instead.

For the tests, the Jest lib was applied, with a SQLite database. The choise of this database was because it uses only a local file to store the data, without interfering in the main database. Even though only one test was kept, I know that the best approach is always keep multiple integration tests at test-driven development, but in this case I decided to leave only the integration of a service creation (the other possible tests would be only coppies of this one).

---

It's worth saying that I was visiting my family during this assestment, so it took longer than usual to be concluded, but I guess that my coding skills are well represented in this repository. In case you want to see other examples of my work, I'm starting to contribute to the Open Source community, as seen in my GitHub.

Thank you very much for the oportunitty, I am available to answer any questions about this project and looking forward for any answers about the job application and the assestment. 🖖😉

---

### Created by: Jonathan Fillipe Lemes