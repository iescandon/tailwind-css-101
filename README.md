![Tailwind CSS 101 Screenshot](./public/images/tailwindCSS-101.png)

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that provides a collection of pre-designed CSS classes to create user interfaces quickly. It's designed to be highly customizable, and provides a set of building blocks that can be combined to create complex layouts and designs with minimal custom CSS. All without any annoying opinionated styles you have to fight to override.

Tailwind CSS works by providing a set of utility classes that correspond to specific CSS properties, such as text color, padding, margin, and more. These classes can be applied directly to HTML elements to quickly apply the desired styles. For example, the class `bg-blue-500` can be used to set the background color of an element to a specific shade of blue.

Similar to regular CSS, there are no ready-made components provided for you. Simply, add the utility classes in your HTML, and watch how Tailwind automatically attaches the styles for you! You can think of it as shorthand for your CSS.

## Table of Contents

1. [Utility Classes](#utility-classes)
2. [Modifiers](#modifiers)
3. [Arbitrary Values](#arbitrary-values)
4. [Functions](#functions)
5. [Directives](#directives)
6. [Optimization](#optimization)
7. [Customization](#customization)
8. [Links](#links)

## Utility Classes

In Tailwind CSS, utility classes are small, single-purpose classes that can be used to apply specific styles to HTML elements. These classes are named based on the CSS property they control and the value they apply.

For example, the `bg-red-500` class can be used to set the background color of an element to red. Similarly, the `text-lg` class can be used to set the font size of text to large. Utility classes can also be combined to create more complex styles without the need for custom CSS. For example, you could combine the `bg-red-500`, `text-white`, and `px-4` classes to create a red button with white text and some padding:

```
<button class="bg-red-500 text-white px-4 hover:bg-red-900">Click me!</button>
```

Utility classes in Tailwind CSS follow a consistent naming convention that makes it easy to understand what each class does. The naming convention consists of several parts:

- **The first part indicates the CSS property that the class controls** (e.g. `bg` for background color, `text` for text color, `border` for border styles, etc.).
- **The second part indicates the value that the class applies** (e.g. `red-500` for a specific shade of red, `lg` for large font size, `rounded` for rounded corners, etc.).
- **Additional parts may be added to modify or extend the behavior of the class** (e.g. `hover:`, `focus:`, `active:`, `dark:`, etc.).

## Utility Classes: Categories

Tailwind CSS utility classes are organized into several categories based on their functionality. These categories include:

- **Layout**: Utility classes for controlling the layout of elements, such as flex, grid, container, float, and clear.
- **Typography**: Utility classes for controlling the typography of elements, such as font-size, font-weight, text-align, text-color, line-height, and text-decoration.
- **Colors**: Utility classes for controlling the colors of elements, such as bg-color, text-color, border-color, hover-color, and focus-color.
- **Backgrounds**: Utility classes for controlling the backgrounds of elements, such as bg-color, bg-image, bg-size, and bg-position.
- **Borders**: Utility classes for controlling the borders of elements, such as border, border-radius, border-color, and border-width.
- **Spacing**: Utility classes for controlling the spacing of elements, such as padding, margin, space-between, space-around, and space-evenly.
- **Sizing**: Utility classes for controlling the sizing of elements, such as width, height, max-width, max-height, min-width, and min-height.
- **Effects**: Utility classes for adding effects to elements, such as shadow, opacity, transform, transition, and animation.
- **Interactivity**: Utility classes for controlling the interactivity of elements, such as hover, focus, active, disabled, and cursor.

## Modifiers

In Tailwind CSS, modifiers are used to adjust the behavior or appearance of utility classes. Modifiers can be applied using a colon (:) followed by the modifier name. The categories of modifiers in Tailwind CSS include:

- **Responsive**: Allows utility classes to be applied at specific screen sizes, such as `sm:`, `md:`, `lg:`, and `xl:`.
- **State**: Modifiers for controlling the appearance of elements in different states, such as `hover:`, `focus:`, `active:`, and `disabled:`.
- **Variants**: Modifiers for applying utility classes to specific variations of an element, such as `first:`, `last:`, `even:`, `odd:`, and `group:`.
- **Pseudo-class**: Modifiers for applying styles to pseudo-classes, such as `first-child:`, `last-child:`, and `nth-child:`.
- **Pseudo-element**: Modifiers for applying styles to pseudo-elements, such as `before:` and `after:`.
- **Accessibility**: Modifiers for adding accessibility-focused styles, such as `sr-only` for screen-reader only text and `not-sr-only` for visible text.
- **!important**: Modifier is used to override any previously defined styles, even if they have a higher specificity. You can make any utility important by adding a `!` character to the beginning. The `!` always goes at the beginning of the utility name, after any variants, but before any prefix. For example `sm:hover:!tw-font-bold`.

These modifiers provide additional flexibility and control when using the utility classes in Tailwind CSS.

## Arbitrary Values

If you ever need to use a CSS property that Tailwind doesn’t include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS.

- **Use arbitrary values**: When you find yourself really needing something like top: 117px to get a background image in just the right spot, use Tailwind’s square bracket notation to generate a class on the fly with any arbitrary value.

```
top-[117px]
```

- **Use arbitrary properties**: If you ever need to use a CSS property that Tailwind doesn’t include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS.

```
[mask-type:luminance]
```

- **Use arbitrary variants**: Arbitrary variants let you write custom selector modifiers directly in your HTML. Arbitrary variants are just format strings that represent the selector, wrapped in square brackets. For example, this arbitrary modifier selects an element only when it is the third child.

```
[&:nth-child(3)]:underline
```

- **Use arbitrary groups**: You can create one-off `group-*` modifiers on the fly by providing your own selector as an arbitrary value between square brackets for styling based on parent state.

```
<div class="group is-published">
  <div class="hidden group-[.is-published]:block">
    Published
  </div>
</div>
```

- **Use arbitrary peers**: You can style an element based on the state of a sibling element. Mark the sibling with the `peer` class, and use `peer-*` modifiers like `peer-invalid`, `peer-focus`, `peer-required`, and `peer-disabled` to style the target element:

```
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
```

## Resolving Ambiguities

Many utilities in Tailwind share a common namespace but map to different CSS properties. For example `text-lg` and `text-black` both share the `text-` namespace, but one is for font-size and the other is for color.

When using arbitrary values, Tailwind can generally handle this ambiguity automatically based on the value you pass in:

```
<!-- Will generate a font-size utility -->
<div class="text-[22px]">...</div>

<!-- Will generate a color utility -->
<div class="text-[#BADA55]">...</div>
```

## Functions

In Tailwind CSS, there are several functions and directives that can be used to customize the behavior of the framework. Here is a summary of the different functions and directives:

- **`theme()`**: This function is used to access values defined in the `tailwind.config.js`, such as colors, font sizes, and spacing values. You can also use the theme() function to define new values or override existing ones.
```
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
      }
    },
    extend: {
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      fontWeight: {
        bold: '700',
      },
      textColor: {
        gray: {
          600: '#4a5568',
          800: '#2d3748',
      },
      appName: 'Tailwind CSS 101',
      appDescription: 'I am a website that summarizes Tailwind CSS'
    },
  },
  variants: {},
  plugins: [],
}

// CSS
.my-class {
  font-size: theme('fontSize.2xl');
}
```

- **`config()`**: This function is used to access the configuration values defined in the `tailwind.config.js` file. It can also be used to dynamically generate values for various properties such as background color, text color, font weight, font size, and text content.
```
// use value in CSS
.btn-primary {
  background-color: config('theme.colors.blue.500');
}

// access value
const redColor = config('theme.colors.primary.100');

// set value in your tailwind.config.js file at runtime.
config('theme.fontSize.xl', '1.5rem');

// dynamically generate values
<div class="bg-{{config('colors.primary.500')}} text-{{config('fontWeights.bold')}} p-4">
  <h1 class="text-{{config('textSizes.2xl')}}">{{config('appName')}}</h1>
  <p class="text-{{config('textColors.gray.600')}}">{{config('appDescription')}}</p>
</div>
```

- **`match()`**: This function is used to conditionally apply a class based on a comparison between two values.
```
// CSS
.btn {
  @match {
    primary {
      background-color: blue;
    }
    secondary {
      background-color: gray;
    }
  }
}
```

## Directives
Directives allow you to apply existing utility classes to specific elements or contexts, such as hover or focus states, responsive breakpoints, or even arbitrary conditions.

- **`@tailwind base`**: This directive is used to define base styles for the entire document.
- **`@tailwind components`**: This directive is used to define styles for individual components.
- **`@tailwind utilities`**: This directive is used to define utility classes.
- **`@layer`**: This directive is used to specify where styles should be inserted in the final CSS output. It accepts the values base, components, utilities, and screens.

```
// CSS
@layer components {
  .my-component {
    background-color: #fff;
    border: 1px solid #e2e8f0;
    padding: 1rem;
  }
}
```

- **`@apply`**: This directive is used to apply Tailwind utility classes to a traditional CSS file. _Note: This directive does not work via CDN._

```
<div class="bg-gray-100 rounded-lg p-4">
  <h2 class="text-2xl font-bold text-gray-800 mb-2">My Heading</h2>
  <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <a href="#" class="btn-primary">Learn More</a>
</div>

// CSS
.btn-primary {
  @apply bg-blue-500 text-white py-2 px-4 rounded;
}
```

- **`@variants`**: This directive is used to create variants of existing utility classes based on certain conditions, such as hover or focus.
- **`@screen`**: This directive is used to define custom breakpoints for responsive design.

By using these functions and directives, you can create custom styles and utility classes that are tailored to your specific needs.

## Optimization

In Tailwind CSS, there are a few ways to avoid repeating common utility combinations to recreate the same design in many different places. Here are some strategies:

- **Create reusable components**: Instead of repeating the same combination of utility classes in multiple places, you can create reusable components that contain the necessary styles. For example, if you have a button that appears in multiple places, you can create a Button component that contains the necessary utility classes. This way, you can avoid duplicating code and ensure that your styles are consistent across your project.
- **Use `@apply` directive**: Tailwind CSS provides the `@apply` directive that allows you to apply a set of styles to an element. You can define a set of utility classes as a custom style and then use the `@apply` directive to apply the style to elements that need it. This way, you can avoid repeating common utility combinations.
- **Use a CSS preprocessor**: If you're using a CSS preprocessor like Sass or Less, you can define mixins that contain common utility combinations. You can then use the mixins in your CSS code to apply the necessary styles to elements. This way, you can avoid duplicating code and ensure that your styles are consistent across your project.
- **Use a design system**: A design system is a set of guidelines, components, and assets that define the visual language of a project. By using a design system, you can ensure that your styles are consistent across your project and avoid repeating common utility combinations. Tailwind CSS can be a great foundation for building a design system because of its utility-based approach.

Overall, by creating reusable components, using the `@apply` directive, using a CSS preprocessor, and using a design system, you can avoid repeating common utility combinations to recreate the same design in many different places in Tailwind CSS.

## Customization

Tailwind CSS is designed to be highly customizable and provides several ways to customize the framework to suit your needs. Here are a few ways you can customize Tailwind CSS:

- **Configuration file**: Tailwind CSS provides a `tailwind.config.js` file where you can configure various aspects of the framework, such as colors, fonts, breakpoints, and more. You can use this file to modify the default settings and add new ones as needed.
- **Add custom utilities**: You can add your own custom utility classes to Tailwind CSS by using the utilities property in the `tailwind.config.js` file. This allows you to create your own utility classes that match your project's needs.
- **Extend the default theme**: Tailwind CSS provides a default theme that you can extend to include your own custom styles. You can use the extend property in the `tailwind.config.js` file to add new styles to the default theme.
- **Use plugins**: Tailwind CSS provides an API for creating and using plugins that extend the framework's functionality. You can use plugins to add new utilities, components, or styles to Tailwind CSS.
- **Override default styles**: You can override the default styles provided by Tailwind CSS by using the `@layer` directive in your CSS code. This allows you to modify the styles of specific elements or components without having to modify the entire framework.

Overall, Tailwind CSS is highly customizable and provides several ways to modify the framework to match your project's needs. By using the configuration file, adding custom utilities, extending the default theme, using plugins, and overriding default styles, you can create a highly customized and tailored version of Tailwind CSS for your project.

## Links

Tailwind CSS 101

- Codepen: [Styled with Regular CSS](https://codepen.io/mexicode/pen/ZEMXJKP)
- Codepen: [Styled with Tailwind CSS](https://codepen.io/mexicode/pen/ZEMXpYm)
- Github: [Styled with Tailwind CSS + Optimization](https://tailwind-css-101.vercel.app/) (source code is in this repository)

Accordion Interactive Demo

- Codepen: [Start](https://codepen.io/mexicode/pen/LYJdoPa)
- Codepen: [End](https://codepen.io/mexicode/pen/BaOObOW)

Additional Links

- Tailwind CSS [Docs](https://tailwindcss.com/)
- Tailwind CSS [Cheatsheet](https://flowbite.com/tools/tailwind-cheat-sheet/)
- Tailwind CSS [VSCode Intellisense Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
