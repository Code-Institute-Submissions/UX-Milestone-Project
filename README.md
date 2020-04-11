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
- Intuitively navigate the site using the navbar, in order to shorten the time between entering the site and finding the desired information.
- See the site branding in order to associate the brand with the content on the site.
- View the most recent articles in order to see summaries of the most recent news, and if desired navigate to those articles. (__*full articles would be hosted on a blog of sorts, the implementation of which falls outside of the current scope of the project, so they will be placeholders.*__)
- Read the aims in order to learn why the company does what it does, and how it does it.
- View the timeline in order to get a fuller understanding of the company and how their history affects their ongoing operations.
- Use the contact section form in order to submit messages to the company in order to contact them with queries, complaints, complements, or stories.
- Be supplied with alternate contact information such as a location or phone address if a direct online message is inappropriate or impossible for the desired method of contact.
- View the associated organisations that the company is part of, and navigate to their sites. (__*as those sites do not currently exist and are outside of the scope of this project, these logos will simply open into blank tabs or other placeholder pages.*__)
- See the copyright information for the company, also located in the footer, in order to know the legal ownership of the site and be assured that the site is an official one.


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

Testing was primarily done during development when changes were made to each section, to ensure that the site continued to maintain functionality and correct styling accross multiple viewport sizes.
The smallest boundary for testing screen width was 300px, slightly below the chrome debug tools responsive window 'Mobile S' size. This was chosen because while most device sizes are above this, I wanted to ensure it worked at most reasonable fringe cases.
Height was only an issue until the full content of the page was added, at which point the footer properly adhered to the bottom of the page, and was no-longer a concern.

#### User Story Testing:
- Users must be able to navigate via the navbar.
  - This was tested by simply clicking each of the individual nabar buttons to ensure they took the viewport to the appropriate section of the site.
  - Works correctly.
    - During development, an issue arose wherein the titles of each section would be hidden underneath the navbar when selected. this was rectified by adding a margin to the top of each title slightly larger than the nav bar.

- See the site branding at all times
    - The site logo is on the navbar, which is stuck to the top of the viewport, ensuring this happens.

- View the titles and summaries of most recent articles(__*Full articles would be hosted on a blog of sorts, the implementation of which falls outside of the current scope of the project, so they will be placeholders.*__)
    - As stated in the comment, these articles are not currently intended to lead off site.
    - However: the links are functional in that they do open new tabs and can easily be clicked on, so a simple change of the href would be all it would require.
    - Also: the older articles section is now able to scroll, ensuring that the overall article section maintains it's size.

- Read the Aims to Learn more about the company
    - This section was reworked slightly to better fit the worldbuilding I was aiming for, so it more acts as a 'what' rather than 'why' of the company, it is viewable however so it works great.

- View the timeline in order to get a fuller understanding of the company and how their history affects their ongoing operations.
    - Timeline works very well at all tested resolutions, though does get a little hard to read at 4k.

- Use the contact section form in order to submit messages to the company in order to contact them with queries, complaints, complements, or stories.
    - The form exists, though does not currently send the messages anywhere. I ran out of time during the implemetation of the site so was unable to create a dummy link to send the data to.

- The phone or other methods of contact were scrapped during development, as they did not fit the flow of the site nor make any sense narratively, given the setting's lack of phones.

- View the associated organisations that the company is part of, and navigate to their sites. (__*As those sites do not currently exist and are outside of the scope of this project, these logos will simply open into blank tabs or other placeholder pages.*__)
    - The icons used in this section are merely placeholders, however they do correctly link to new tabs, needing only a href change to be correct, once the proper sites are made in future.

- See the copyright information for the company, also located in the footer, in order to know the legal ownership of the site and be assured that the site is an official one.
    - Copyright is visible and fictional.

## Deployment

Deployment proved surprisingly easy, All that was nessicary was activating the github pages version of the site via the usual method, that is to say:
   - Navigating to the repository
   - Scrolling to the Github Pages section
   - Choosing to Deploy via Github Pages.

There are no differences between the deployed and development versions of the site, to my knowledge.

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
    - https://pixabay.com/photos/iceland-northern-lights-aurora-2175944/
    - https://www.wallpaperflare.com/search?wallpaper=elixir
    - https://www.flickr.com/photos/71256895@N00/8361322191
    - https://www.flickr.com/photos/quoteinspector/41296772825
### Acknowledgements

- Wizards of the Coast for D&D for this whole thing in general.
- My friends for writing this with me over the years