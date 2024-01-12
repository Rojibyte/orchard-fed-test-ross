# Interface Development Test

## Design assets

- Invision public URL: https://invis.io/N312IJ0C8GMK
- Assets used in the build have been packaged under the `/assets` folder.

## Test instructions

In the linked Invision page you will find the designs for two components. Complete the following:

- The code should be submitted via a github account. Bonus points for more than one commit.
- Build the two blocks using modern HTML5 standards.
- Use JavaScript to capture all anchor clicks, and `console.log()` the element which has been clicked.
- As with any modern web-build we expect a level of interactivity/animation to be displayed on the nodes.
- All content areas should be deemed as being populated from a CMS - so all copy lengths can vary!

## Technologies

- Any CSS-preprocessors or frameworks.
- ES5 or ES6+ acceptable.
- Please include some reasoning for the decisions via comments or readme.
- Build tools and task runners are encouraged (e.g. grunt/gulp/webpack).

## Layout

- The layout is expected to work in the latest Chrome/FireFox/Edge versions.
- The layout should be responsive and work down to a `320px` mobile device.
- Bearing in mind that this application is expected to be responsive, the developer should consider the appropriate `<meta>` tags.
- **Section: All the latest:** Assume these items need anchor tags, but have no link defined.
- **Section: Answer your body's needs:** Each image in this section should display in a modal on click.

## Review Criteria

We are looking for your ability to bring life to static designs. During that process consider the following:

- **Project structure:** Clean project and logical traversal.
- **JavaScript:** Efficiency of code and efficacy in bringing the design to life.
- **Interface:** Semantic markup styling.
- **Git:** Bonus points for submission on a github account showing multiple commits.
- **Quality:** Production-grade build and precision.

## Reasoning and Decisions

- **HTML**
  For the HTML, I drawed a wireframe on a notebook or paint to visualize the layout so I have an idea on how I will structure each components, sections, rows, columns and elements while making some changes along the way.

- **Build Tools**
  I used webpack or vite as I have some experience with it when I was learning react.
  Here is a simple react app I deployed using app.netlify.com - https://rogelio-digital-business-card.netlify.app/

- **JS**
  I'm quite familiar on using jQuery so I went with it. When I was importing images I added all the image assets in a JSON object so it will be easier to call them and I also added in a simple loading gif when opening each image in "Section: Answer your body's needs". I added in when you click the elements it captures the element tag and console.log which element you clicked.

- **Framework**
  I used bootstrap for ease of use, familiarity, and less custom css styling.

- **CSS/SASS**
  I used SASS/SCSS for easier coding when specifying certain elements nested and I will have less custom css styling which makes the code cleaner.
