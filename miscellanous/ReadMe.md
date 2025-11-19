# BakeWell Bakery Website Project

## Project Overview
This project is a website for BakeWell Bakery, a family-owned artisan bakery based in Sandton, Johannesburg. The site showcases products, team members, and company information, with a focus on fresh baked goods and health-conscious options.

## Folder Structure
- `index.html` — Home page
- `pages/` — Contains About, Products, Enquiry, Contact, and Blog pages
- `css/` — Contains the external stylesheet `style.css`
- `assets/` — Contains images used across the website
- `miscellaneous/` — Contains project documentation such as README and changelog

## Features
- Navigation menu linking all pages
- Hero section on the homepage
- Product previews and detailed product page
- About Us section including mission, vision, and team
- Responsive design considerations (via external CSS)
- Footer with copyright information

## Notes
- All images are stored in the `assets/` folder.
- CSS is linked externally for consistent styling.
- The `pages` folder contains all inner HTML pages.
- The `miscellaneous` folder contains project documentation.

FOLDER STRUCTURE
BakeWellBakery/
│
├── assets/                 # All images used in the website
│   ├── baker.jpeg
│   ├── croissant.jpg
│   ├── ... (other images)
│
├── css/                    # External CSS stylesheet
│   └── style.css
│
├── pages/                  # All inner pages
│   ├── about.html
│   ├── products.html
│   ├── enquiry.html
│   ├── contact.html
│   └── blog.html
│
├── miscellaneous/          # Miscellaneous documents
│   ├── README.md
│   └── changelog.txt
│
└── index.html              # Home page

Usage Instructions

    Edit the index.html file to update homepage content.

    Modify css/styles.css to change colors, fonts, or layout.

    Add new pages and link them through the navigation bar.

    AUTHOR

    PHAHO L

    Changelog
v1.0.0 – Initial Release (2025-08-27)

    Added homepage (index.html)

    Created the following pages About,Blog,Contact,Enquiry and Products.

    Added navigation bar and footer

    



# BakeWell Bakery Website – Part 3

## Website Overview

**BakeWell Bakery** is a fully responsive, interactive website for a fictional artisan bakery located in Sandton, Johannesburg. This Part 3 iteration focuses on **enhancing website functionality, SEO, and user experience**. The website showcases baked products, custom cakes, pastries, breads, a team section, a blog, contact information, and enquiry forms. It is optimized for search engines, incorporates dynamic content, interactive UI components, and integrates social media for engagement.

---

## Key Features Implemented

1. **SEO Optimization**  
   - Descriptive `<title>` tags for all pages.  
   - Meta tags for **description**, **keywords**, **author**, **robots** for search engines.  
   - Open Graph and Twitter Card meta tags for social media sharing.  
   - Each page has a unique meta description and keywords.

2. **Dynamic Real-Time Content**  
   - Live greeting messages, current date and time, and daily specials on Index and About pages.  
   - Implemented using external JavaScript (`javascript.js`).  

3. **Search Functionality on Products Page**  
   - Users can filter products in real-time via a search input.  
   - Implemented using external JS (`product-search.js`) without inline scripts.  

4. **Lightbox Modal for Images**  
   - Interactive image viewing for product and staff images.  
   - Supports captions, previous/next navigation, and close functionality.  
   - Implemented with external JS (`lightbox.js`).

5. **Social Media Integration**  
   - Footer icons for Facebook, Twitter/X, WhatsApp, and YouTube.  
   - Links open in new tabs.  
   - Styled and responsive across all pages.

6. **Enquiry Page Enhancements**  
   - Accordion FAQ section using external JS (`accordion.js`).  
   - Custom Cake & Catering enquiry form with validation and dynamic user feedback.

7. **Contact Page Enhancements**  
   - Google Maps embed for bakery location.  
   - Contact form with validation and `mailto:` action.  
   - Social media icons included in the footer.

8. **Blog Page Enhancements**  
   - Structured `<article>` elements with `<time>` tags for publish date.  
   - “Read more” links included for detailed posts.  
   - Footer social media icons consistent with other pages.

9. **Responsive Design and CSS Enhancements**  
   - Search bar, social media icons, cards, and forms styled for mobile-first design.  
   - Hover effects and lightbox styling included.  

---

## Website Structure
/project-root
│
├─ index.html # Home page
├─ pages/
│ ├─ about.html # About Us page
│ ├─ products.html # Products listing page
│ ├─ enquiry.html # Custom Cake & Catering enquiry form
│ ├─ contact.html # Contact page with Google Maps
│ └─ blog.html # Blog page
│
├─ css/
│ ├─ styles.css # Main site styling
│ └─ contact.css # Specific contact page styling
│
├─ js/
│ ├─ javascript.js # Dynamic content (real-time messages, date, etc.)
│ ├─ product-search.js # Product search filtering
│ ├─ lightbox.js # Lightbox image functionality
│ └─ accordion.js # Accordion FAQ functionality
│
└─ assets/
├─ images # Product and staff images
└─ logo.png # Bakery logo


---

## How to Use the Website

1. **Open the Website**  
   - Open `index.html` in any modern web browser.  
   - Navigate through the site using the top navigation bar.

2. **Search Products**  
   - On the Products page, use the search input at the top to filter product cards in real-time.  

3. **View Images in Lightbox**  
   - Click on any product or staff image to open it in a lightbox modal.  
   - Use previous/next arrows to navigate between images.  

4. **Submit Enquiries**  
   - On the Enquiry page, fill in your details in the form.  
   - Accordion sections provide guidance on submission and delivery options.  

5. **Contact Bakery**  
   - Contact page includes email and phone information.  
   - Google Maps embed shows bakery location.  
   - Social media icons in the footer link to external platforms.

6. **Read Blog Posts**  
   - Navigate to the Blog page to view posts with summaries and publication dates.  
   - Click "Read more" to expand or follow links to full posts.

---

## Browser Support

- The website is **tested and compatible with modern browsers**:  
  - Google Chrome (latest)  
  - Mozilla Firefox (latest)  
  - Microsoft Edge (latest)  
  - Safari (latest, MacOS/iOS)  

- **Responsive and Mobile-Friendly**  
  - Layout adjusts for desktops, tablets, and mobile devices using CSS media queries.

---

## Technologies Used

- **HTML5** – Semantic structure for SEO and accessibility.  
- **CSS3** – Responsive design, styling, hover effects, and animations.  
- **JavaScript (ES6)** – Dynamic content, search filtering, accordion functionality, and lightbox interactions.  
- **Font Awesome** – Social media icons.  
- **Google Maps Embed** – Interactive location map.  

---

## Notes & Best Practices

- All JavaScript functionality is **external** for maintainability.  
- SEO meta tags are included for **search engine visibility** and **social media sharing**.  
- Footer social media links are consistent across all pages.  
- Forms include HTML5 validation for usability and user feedback.  
- Images include descriptive `alt` attributes for accessibility.

---

## References

1. **HTML5 and Semantic Elements** – W3Schools, MDN Web Docs.  
2. **CSS3 and Responsive Design** – MDN Web Docs.  
3. **JavaScript ES6 Features** – MDN Web Docs.  
4. **Font Awesome Icons** – [https://fontawesome.com](https://fontawesome.com)  
5. **Google Maps Embed** – [https://developers.google.com/maps/documentation/embed/](https://developers.google.com/maps/documentation/embed/)  
6. **SEO Best Practices** – Moz SEO Guide, Google Search Central.  
7. **Accessibility Guidelines** – W3C Web Accessibility Initiative (WAI).  
8. **Lightbox Modal Implementation** – [https://lokeshdhakar.com/projects/lightbox2/](https://lokeshdhakar.com/projects/lightbox2/)  
9. **Accordion UI Component** – W3Schools JavaScript Accordion Tutorial.  
10. **Responsive Form Validation** – MDN Web Docs, HTML5 Form Validation.

---

## Author

**Lethabela**  
BakeWell Bakery Website – Part 3



    REFERENCES
    W3Schools. (2025, September 12). W3Schools. Retrieved from W3Schools: https://www.w3schools.com/cssref/pr_class_cursor.php

    Schools, W. (2025, September 16). W3 SCHOOLS. Retrieved from W3 SCHOOLS: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

    Jiks, S. (2025, September 17). Mr. (John, Interviewer)