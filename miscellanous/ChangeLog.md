 Changelog
v1.0.0 – Initial Release (2025-08-27)

    Added homepage (index.html)

    Created the following pages About,Blog,Contact,Enquiry and Products.

    Added navigation bar and footer

    

v1.1.0 – Latest Update (2025-09-26)
    Added css for decoration, layout, and typography

    Added content on the product page which is images for the products

    Added a few comments on a few pages

    Added the meet out team on the about page

    Ensured that alll the omages added are given the appropriate width and height.

    Integrated Font Awesome icons

    Added responsive CSS styling


    # Changelog – BakeWell Bakery Website (Part 3)
Made sure that the css styling is linked and it is now portable for both smartphone,tablet and desktop.

All notable changes to this project are documented in this file.  
This follows [Semantic Versioning](https://semver.org/) principles for clarity and organization.

---

## [Part 3 – 2025-11-19] – Major Update

### **Added Features**

1. **SEO Enhancements**
   - Implemented unique `<title>` tags for all pages (Index, About, Products, Blog, Enquiry, Contact).  
   - Added `<meta>` description and keywords for all pages.  
   - Added `author` and `robots` meta tags.  
   - Integrated Open Graph (`og:`) and Twitter Card meta tags for social media sharing.

2. **Dynamic Content**
   - Real-time greeting messages, current date/time, and daily specials on Index and About pages.  
   - External JavaScript file (`javascript.js`) handles dynamic updates.  

3. **Search Functionality**
   - Added a product search/filter input on the Products page.  
   - External JavaScript file (`product-search.js`) performs real-time filtering of product cards.  

4. **Lightbox Feature**
   - Interactive image modal for product and staff images.  
   - Includes captions, previous/next navigation, and close functionality.  
   - Implemented in external JS (`lightbox.js`).  

5. **Social Media Integration**
   - Added consistent social media icons (Facebook, Twitter/X, WhatsApp, YouTube) to the footer on all pages:  
     - Index, About, Products, Blog, Enquiry, Contact.  
   - Links open in new tabs.  
   - Styled for responsiveness.

6. **Enquiry Page Enhancements**
   - Accordion FAQ sections for submission instructions, delivery options, and FAQs.  
   - External JS (`accordion.js`) controls accordion functionality.  
   - Custom Cake & Catering enquiry form improved with HTML5 validation and dynamic user feedback.

7. **Contact Page Enhancements**
   - Google Maps iframe embed showing bakery location.  
   - Contact form with `mailto:` submission.  
   - Social media icons added to footer.  

8. **Blog Page Enhancements**
   - Structured blog posts with `<article>` and `<time>` elements for publication dates.  
   - “Read more” links added.  
   - Footer social media icons integrated consistently.

### **Improvements**

- Improved **CSS styling** for search bar, cards, forms, lightbox, and social media icons.  
- Ensured **responsive design** for mobile, tablet, and desktop screens.  
- Added descriptive `alt` attributes to all images for accessibility.  
- Externalized all JavaScript code for maintainability (no inline JS).  
- Ensured **consistent footer layout** and social media links across all pages.  

### **Fixed Issues**

- Corrected navigation highlighting (`.active`) for current page links.  
- Fixed alignment and spacing issues on hero section and staff gallery.  
- Improved readability of dynamic content panels on About and Index pages.  
- Ensured all social media icons display properly across devices.  

### **File Changes**

#### **HTML**
- `index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`, `blog.html`  
  - Added SEO meta tags, Open Graph and Twitter Card tags.  
  - Added social media icons in the footer.  
  - Integrated dynamic content placeholders.  
  - Added product search input (Products page).  
  - Added accordion sections (Enquiry page).  

#### **CSS**
- `styles.css`  
  - Added styling for footer social media icons.  
  - Added responsive styling for search input, lightbox modal, and dynamic panels.  
- `contact.css`  
  - Enhanced form layout and feedback styling.  

#### **JavaScript**
- `javascript.js` – Dynamic greeting messages, date/time, daily specials.  
- `product-search.js` – Real-time product search filtering.  
- `lightbox.js` – Image modal functionality.  
- `accordion.js` – FAQ accordion toggle functionality.  

#### **Assets**
- Added images for social media icons via Font Awesome (CDN).  
- Ensured all product, staff, and logo images are optimized for web.  

---

### **References**
1. Font Awesome Icons – [https://fontawesome.com](https://fontawesome.com)  
2. Google Maps Embed – [https://developers.google.com/maps/documentation/embed/](https://developers.google.com/maps/documentation/embed/)  
3. MDN Web Docs – HTML, CSS, and JavaScript resources.  
4. W3Schools – Accordion and lightbox tutorials.  
5. Moz SEO Guide – SEO best practices.  
6. W3C Web Accessibility Initiative – Accessibility guidelines.  

---

### **Author**
**Lethabela** – BakeWell Bakery Website Part 3  
