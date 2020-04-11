# Potions 11 - Interactive Fictional Website

This website has two primary purposes:

- The first is that it exists as a piece of worldbuilding for a fiction setting I have been writing for some time now. A modern-esque fantasty setting created for the purposes of running tabletop RPG campaigns in, it takes place in a fantasy world that has avoided the technological stagnation that typically happens in fantasy. As such, this site exists in world, as the website of a somewhat high-class alchemist's store chain.

- The second point, as an in-universe website it must fit the needs of the people within the setting, so it acts as a way for them to learn about this company, and as a way for the company to advertise its goods and services.
 
## UX

#### Design process

The first and foremost part of the design process for this site was to figure out the 'look' that the site should go for. After some deliberation I settled upon emulating the style of craft brewery websites, as the overall structure of buisness is somewhat similar to what I have in mind for the alchemy company.

With that in mind, I took to researching the structure of various websites in this area, such as:

- https://honestbrew.co.uk/
- https://www.brewdog.com/uk/
- https://hoptimism.co.uk/
- https://www.craftbeer.com/

From this research, I looked at the common elements between the sites' structure, along with what would be thematically appropriate.

Then, I discussed with an artist friend of mine what would make an appropriate colour scheme for an alchemists' website, and settled upon
 
#### User stories

As what amounts to a piece of interactive fiction, the site has a dual purpose, as discussed before. As such, the user stories need to reflect this and thus are to be divided into two main sections:

##### Ficton Centric User Stories:

- Website must present a believable layout to users, in order to provide a more immersive setting.

##### In-Universe User Stories:

Users must be able to:
- intuitively navigate the site using the navbar, in order to shorten the time between entering the site and finding the desired information.
- see the site branding in order to associate the brand with the content on the site.
- view the most recent articles in order to see summaries of the most recent news, and if desired navigate to those articles. (__*full articles would be hosted on a blog of sorts, the implementation of which falls outside of the current scope of the project, so they will be placeholders.*__)
- read the aims in order to learn why the company does what it does, and how it does it.
- view the timeline in order to get a fuller understanding of the company and how their history affects their ongoing operations.
- use the contact section form in order to submit messages to the company in order to contact them with queries, complaints, complements, or stories.
- be supplied with alternate contact information such as a location or phone address if a direct online message is inappropriate or impossible for the desired method of contact.
- view the associated organisations that the company is part of, and navigate to their sites. (__*as those sites do not currently exist and are outside of the scope of this project, these logos will simply open into blank tabs or other placeholder pages.*__)
- see the copyright information for the company, also located in the footer, in order to know the legal ownership of the site and be assured that the site is an official one.


#### Mockup

https://github.com/PokeyMcFork/UX-Milestone-Project/blob/master/Mockup.pdf


## Features

### Existing Features
- Navbar, with navigational buttons with a soft color transition when hovered over, stays stuck to the top of the page.
- Bootstrap carousel to display images with captions to act as landing area for page and as advertising material.
- Articles section to provide users with worldbuilding current events, and to act as potential plot hooks for any tabletop game sessions.
- About section provides further worldbuilding by acting as a somewhat realistic advertising spiel.
- Timeline provides history for the Users of the tabletop setting, and further serves to enhance the potential believability of the site.
- Contact section, which in future may further developed to be used as a interactive piece of storytelling, possibly by having a secret code as a message to submit, which could have consequences in-game.
- Footer, with copyright thing and several external links to associated companies in-universe.

### Features Left to Implement
- Blog/news site where articles are directly pulled from, to allow for easier updating of news articles, and for pushing content to multiple sites via tagged content.
- Testimonials section, to put certain messages uploaded by users, along with Game-Master/Site-Admin uploaded ones.
- External sites for each of the associated companies, along with specific logos for each of them.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.
- HTML5 https://www.w3.org/
- CSS3 https://www.w3.org/Style/CSS/
- Javascript https://developer.oracle.com/javascript/
- Fontawesome https://fontawesome.com/v3.2.1/icons/
- Project uses Bootstrap and appropriate JQuery requirements for both layout purposes and to create the carousel of images at the top of the page.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

- W3Schools for Javascript for mobile burger menu button. - https://www.w3schools.com/tags/tag_script.asp
- W3Schools also had the information on what pseudoclasses to target to style the scrollbars.

### Content
- solution to highlighting active section of page on navbar by user Zim on StackOverflow: https://stackoverflow.com/questions/29272187/change-bootstrap-navbar-link-color-based-on-position-on-page
- Fonts from Google Fonts
- icons from: https://fontawesome.com/v3.2.1/icons/

### Media
- images from:
    - https://picryl.com/media/alchemist-a617de
    - https://en.wikipedia.org/wiki/Brewery
    - https://www.flickr.com/photos/rockonmatt/1809279608
    - https://www.publicdomainpictures.net/en/view-image.php?image=47413&picture=potion-bottles
    - https://www.pexels.com/photo/green-fields-near-brown-mountain-210243/
    - https://pixabay.com/photos/dungeon-castle-fortress-ruin-2787899/
    - https://pixabay.com/photos/neuschwanstein-castle-bavaria-701732/
    - https://pixabay.com/photos/spring-tree-flowers-meadow-276014/
### Acknowledgements

- Wizards of the Coast for D&D for this whole thing in general.
- My friends for writing this with me over the years