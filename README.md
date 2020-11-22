# Find my profession

Technical test to Find My Profession, using ReactJS.

---

## Deployment and access

To prevent configuration problems, the project was deployed using <a href="https://vercel.com/">Vercel</a> and <a href="http://heroku.com/">Heroku</a>.

The main app can be accessed by clicking <a rel="noreferrer" target="_blank" href="https://find-my-profession.vercel.app/">here</a>. Vercel is responsible for the front-end environment, built with <a href="https://pt-br.reactjs.org/">ReactJS</a>. 

The app gets all the data by HTTP Requests in a Heroku server, built with <a href="https://expressjs.com/pt-br/">ExpressJS</a>. The API Documentation can be found by clicking <a className="nav-link" rel="noreferrer" target="_blank" href="https://app.swaggerhub.com/apis-docs/JonathanLemes/Find-my-profession/">here</a>.

Also in Heroku, there is another server running, responsible for the database built with <a href="https://www.postgresql.org/">PostgreSQL</a>. The data was inserted via <a href="https://insomnia.rest/">Insomnia</a>, using the REST API.

---

## Front-End

The ReactJS app was built following the steps at the Practical skills assessment PDF. As requested, I focused on building a clear and understandable code, without adding new funcionalities to it. Although the App.tsx has the base code for rendering the SPA, the routes through pages are made by routes.tsx, using the lib *react-router-dom*. The routing through the Pricing pages are made by the url inserted at the Service Table.

A good addition to the base code could be the implementation of the React App with <a href="https://nextjs.org/">NextJS</a>, to be possible to work with SEO by it's smart SSR tools, without overcharging the Vercel server.

The front-end was implemented with all the funcionalities at the PDF, 

---

### Created by: Jonathan Fillipe Lemes