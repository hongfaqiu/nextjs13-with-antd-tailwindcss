# Using Ant-Design 5 with Next.js 13 and Tailwind CSS

Antd is is an excellent UI component library, but there are some conflicts between the antdV5 and Next.js 13.
This repository solved these problems, and you can use the template to start your project.

## Features

- [Next.js 13](https://github.com/vercel/next.js) `app` directory
- [Ant-Design 5](https://github.com/ant-design/ant-design)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- Automatic import sorting with [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
- Dark mode with [next-themes](https://github.com/pacocoursey/next-themes)
- Icons from [Lucide](https://lucide.dev)
- Globalization with [next-intl](https://github.com/amannn/next-intl)

## Problems and solutions

Here are some problems and solutions I encountered when I started the project

1. Server side rendering and CSS-in-JS antd5
    <https://github.com/vercel/next.js/issues/44125#issuecomment-1372270391>

2. Distinguish client/server components when using Next.js 13 app directory
    <https://beta.nextjs.org/docs/rendering/server-and-client-components>

3. Priority conflict of css style when using Ant-Design 5 and Tailwind CSS
    <https://github.com/ant-design/ant-design/issues/38794#issuecomment-1328262525>

4. DatePicker component internationalization has not taken effect
    <https://github.com/ant-design/ant-design/issues/27276#issuecomment-1281799701>
