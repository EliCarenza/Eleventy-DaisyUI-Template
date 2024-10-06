# Eleventy-DaisyUI-Template
A custom template for Eleventy using DaisyUI as theme control.

## Other custom features
- Custom 404 page
- Automatic copyright year - never have to update it again
- Theme control with DaisyUI, and a theme switcher

### Coming soon:
- Font Awesome
- Contact form template

## How to use this template
1. Clone this repository
2. Run `npm install`
3. Modify the content in the `src` folder - be sure to update the `_data/site.json5` file with your information
4. Run `npx start` to start the development server and test your changes
5. Run `npx build` to build the project - the output will be in the `_site` folder

### More information

### How to enable the blog and use it:
1. Go into the `_data/site.json5` file and change the `blog` value to `true`
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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Eleventy](https://www.11ty.dev/)
- [DaisyUI](https://daisyui.com/)
- [Font Awesome](https://fontawesome.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Cahngelog

### 1.0.0
- Initial release