# Eleventy-DaisyUI-Template
A custom responsive template for Eleventy using DaisyUI.

## Other custom features
- Custom 404 page
- Automatic copyright year - never have to update it again
- Theme control with DaisyUI, and a theme switcher
- About page
- Demo contact form page
- Mobile support in the header
- Blog support
- Fontawesome icons
- Accessibility improvements

## How to use this template
1. Clone this repository
2. Run `npm install`
3. Modify the content in the `src` folder - be sure to update the `_data/site.json5` file with your site's information
4. Run `npm start` to start the development server and test your changes
5. Run `npm build` to build the project - the output will be in the `_site` folder

### More information

### How to use the blog
1. Go into the `_data/site.json5` file and make sure the `blog` value is set to `true`
2. Create a new markdown file in the `blog` folder
3. Add the following front matter to the file:
```markdown
---
title: "First Blog Post"
date: 2023-10-01
author: "John Doe"
layout: blogPost.njk
---
```
4. Add your content below the front matter, this will be the content of your blog post
5. Repeat steps 2-4 for each blog post you want to add

## Screenshots
### Homepage
![Homepage](screenshots/home.png)

### Mobile
![Mobile](screenshots/mobile.png)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Authors
- [Eli Carenza](https://github.com/elicarenza)

## Acknowledgements
- [Eleventy](https://www.11ty.dev/)
- [DaisyUI](https://daisyui.com/)
- [Font Awesome](https://fontawesome.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Changelog

### 1.3.1
- Update theme toggle to use DaisyUI component

### 1.3.0
- Add Fontawesome icons
- Accessibility improvements
- Example Terms of Service and Privacy Policy pages

### 1.2.0
- Add about page
- Add demo contact form page

### 1.1.0
- Better mobile support in the header
- Fix the blog post list template
- Add a "back to the blog" breadcrumb to the blog post template

### 1.0.0
- Initial release
