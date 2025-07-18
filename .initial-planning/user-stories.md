# Mow-and-More: User Stories

[README.md](README.md)


## User Story 1: Easy navigation and responsive design to the website (MUST HAVE)

* I'm looking for someone to do outside garden and propery maintenance.  I need to be able to find the information I am looking for (such as services offered, locations, price ranges, testimonials, how to get in touch) quickly and easily on all type of device (mobile, tablet and laptop).  If I can't find what I need or get frustrated by the site I'll leave and look elsewhere.

### Acceptance Criteria
* Logical navigation to access all sections and pages of the website and locate key information.
* Website is responsive on all devices (mobile, tablet and laptop).
* Browser favicon for branding.

### Tasks
* Add a Navbar to the top of the webpage. 
* Style and implement in-site navigation based on industry standards for easy user experience.
* Ensure the Nav bar collaspes to a hamburger on mobile devices.  
* If there are in page links from the nav bar then ensure:
    * expanded nav bar on mobile collapses after clicked.
    * navigation doesn't obscure headings
* Using BootStrap, implement a responsive grid design which looks good on different screen sizes.
    * check for consistency in styling for all sections of the grid (text, images and margins/padding).
* Browser favicon for branding.


## User Story 2: High quality images and information about the services offered (MUST HAVE)

* As someone looking to sell my house I want to see high quality images of what you can do, to ensure that you are able to make my property look 'market ready'.
* As a potential customer I want to see that if I pay you to do a job that the job will be done well.

### Acceptance Criteria
* A gallery of high quality images taken of jobs completed.
* Links to social media profiles which will display photos of current or recent jobs.

### Tasks
* A responsive gallery of high quality images which show a range of completed jobs.  Build the gallery using a BootStrap responsive grid.
* Social media links available in the footer as this is the normal place.  All links have aria labels for assessibility and open in a new tab.
* Easy navigation from gallery to the inquiry form.

## User Story 3: Inquiry form to get a job done (MUST HAVE)

* I like the look of the website and want to get in touch to book you to come and do a job.
* I want to be able to request a phone call rather than email reply to my enquiry as I don't like emails.
* As a potential customer, after placing my inquiry I want to know the next steps to expect- will you come and do the job straight away or can I meet you first?  When will I get the quote?  Do you need to see the property to quote?

### Acceptance Criteria
* Inquiry form easily found accross the site.
* Inquiry form is intutive and accessible (including accessible to those with screen readers).
* Once submitted the form takes the user through to a success page.
* Collect key information (required): name, email, phone number, address of property, service interested in (lawn care, hedge maintenance, patio, gutters & facias), prefered time of day/day of the week.  
* Additional field for the customer to leave any extra information (optional).
* Option on the form to say how they want to hear back: phone call or email (required).
* Above the form a simple step guide of what a customer is to expect (1. complete form, 2. email or phone call back to arrange a time to meet and assess for a quote, 3. get a quote and set a time for the job to be done, 4. Job done; can cancel or rearrange at any point.)

### Tasks
* Above the form a simple step guide of what a customer is to expect (1. complete form, 2. email or phone call back to arrange a time to meet and assess for a quote, 3. get a quote and set a time for the job to be done, 4. Job done; can cancel or rearrange at any point.)
* Build form using BootStrap and style it according to the rest of the website.
* Correct data type for each entry: 
    * text for name, email for email, number for phone number, text-box for extra info.
    * Dropdown box for postcodes covered.
    * Checkboxes for services interested in (can tick more than one)
    * Radio field for call back or email reply.
* Add 'reset' button as well as 'submit' so someone can get rid of entry and start again.
* Add red asterisk (as per norm) to the fields which are mandatory to complete.
* Success page to have button back to the home page but also state approx time frame within which you'll hear back.


## User Story 4: Information about the services offered (MUST HAVE)

* As a landlord I want to book someone in advance to do a routine visit to my property on a 6-monthly basis which includes all the necessary maintenance tasks. I need to see the range of services on offer with high quality images.
* As a potential customer I want to know more about what you can offer: can you cut my hedge?  Will you take the garden waste away?  Do you have tools?  what's included in patio pressure-washing?

### Acceptance Criteria
* A list of services on offer- lawn & hedge cutting, patio & drive pressure wash and repair, gutter & facia upkeep, fence & garden wood treatment - along with knowledgable descriptions (such as specific tools or products used).
* Links to social media profiles which will display photos of current or recent jobs.

### Tasks
* A services section to the website which documents each of the four key areas along with key infomation.
* Social media links available in the footer as this is the normal place.
* Easy navigation from services section to the inquiry form.

## User Story 5: Business information (MUST HAVE)

* As a potential customer I want to know if I live within the area covered by the service and what days of the week you do the work.

### Acceptance Criteria
* Key business information: list of postcodes (B91-93) covered and working hours (Mon-Fri 8:30-5pm) easily locatable in the footer.

### Tasks
* Key business information: list of postcodes (B91-93) covered and working hours (Mon-Fri 8:30-5pm) easily locatable in the footer.
* Also add this information above the booking form so that potential customers who live outside the postcode area know what to expect.

## User Story 6: Key benefits of using the service (MUST HAVE)

* As a potential client I want to know why I should book 'Mow & More' rather than another service.

### Acceptance criteria
* List of 5 key reasons to book.

### Tasks
* Hero section for the home page with standout image and bold, eye catching text.
* Key reasons why to use the service and what's on offer (jobs done at regular intervals without hassle or arrange for one-off visits to keep the garden nice while you're on holiday, a spring refresh, get a house 'market ready' etc.)

## User Story 7: Testimonials from past customers (MUST HAVE)

* Looking after the garden has become too much for me and I want someone to cut the grass once a fortnight, collecting the grass cuttings.  I want to know the job will be well done but also that the person I let into my home is reliable and trustworthy.  I would like to read testimonials prior to booking and to know a bit about the person who will be doing the job (a photo as well).
* As the child or carer for an elderly relative I want to know that the person coming to do the work is trustworthy.

### Acceptance criteria
* Begin the testimonials section with a photo of the gardener and short bio or quote from him/her (allows potential customers to put a face to the name and engenders confidence.)
* A range of testimonials with photo and quote.
* Arrange in a carousel which is responsive across different devices.

### Tasks
* Build a carousel of testimonials.
* Use Bootstrap carousel with captions to add the text over image. Style the div containing quote such that it is semi-transparent so that the text is readable.
* Must be responsive across all devices.

## User Story 8: In depth information about each service (SHOULD HAVE)

* As a potential customer I want to know more about your hedgecutting service (eg. what the best time of year is to have it done, do you take the cuttings away with you, approximate price), patio cleaning (eg. what pressure will the pressure wash be, what products do you use on the patio, what extra services can you offer such as filling in the grout or re-fitting wonky paving slabs, are the products used pet friendly)...

### Acceptance Criteria
* A popup modal or seperate webpage for each service styled in a similar manner: 
    * What the service is
    * Frequency with which it typically is done (fortnightly for )
    * Approx costs (pricing from... based on size)
    * any special details
* Modal closes so that you can continue to look at other services/ If new webpage then there is a link back to the home page.
* Easy link to book or inquire from the modal/webpage.

### Tasks
* Use Bootstrap to add a modal pop up for each of the main services so that this key infomation about each is displayed only when the customer is interested.  It remains closed in other circumstances so that it doesn't take up unnecessary screen space.
**_Use a modal to display the further information at this stage rather than a separate webpage for each service. Later updates of the site can have more information for each service and different pages_**
* Style all items cohesively and make sure it is responsive on all devices.
* Ensure Arai labels inform those with screen readers what the modal does.
* Make opening the modal intutive (the 'button' to open could be the card for the service in question: image and title, when hovered on this gets a box shadow to show it is clickable).

## User Story 9: Link to subscribe to your newsletter (COULD HAVE)

* I don't use social media but want to keep up to date with your offers and seasonal recommendations.  Can I subscribe to your newsletter?

### Acceptance Criteria
* Button or link in footer brings up a modal where the user can subscribe to the newsletter.

### Tasks
* Use Bootstrap modal to create a pop up with a newsletter button link.


## User Story 10: Term & Conditions, Data Protection policy, etc (COULD HAVE- customers can get this information in person if this is not online)

* As a potential customer I want to know about your cancelation policies, how you handle data management etc.

### Acceptance Criteria
* Link in footer to a new page which details all the legal conditions and policies of the business.

### Tasks
* Build a webpage which is accessible from the footer only (not main menu as it will be less visited) which details all the legal essentials: terms of service, refunds, cancelation policies, payment terms, data management in accordance with GDPR etc.

## User Story 11: Professional qualifications and products (COULD HAVE)

* As a potential customer I want to know what qualifications you have and what tools you use.
* As a potential customer I want to know the brands of the wood and patio treatments you use, so I can check if they are safe for my dog or child.

### Acceptance Criteria
* Links to professional qualifications (placed in an extended 'bio' section or 'About' page), high quality products or tools used.
* Logos for important qualifications and products can be added to footer.

### Tasks
* Build an 'About Page' with bio from the gardener.