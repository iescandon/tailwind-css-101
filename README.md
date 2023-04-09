![Tailwind CSS 101 Screenshot](./public/images/tailwindCSS-101.png)

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that provides a collection of pre-designed CSS classes to create user interfaces quickly. It's designed to be highly customizable, and provides a set of building blocks that can be combined to create complex layouts and designs with minimal custom CSS. All without any annoying opinionated styles you have to fight to override.

Tailwind CSS works by providing a set of utility classes that correspond to specific CSS properties, such as text color, padding, margin, and more. These classes can be applied directly to HTML elements to quickly apply the desired styles. For example, the class `bg-blue-500` can be used to set the background color of an element to a specific shade of blue.

Similar to regular CSS, there are no ready-made components provided for you. Simply, add the utility classes in your HTML, and watch how Tailwind automatically attaches the styles for you! You can think of it as shorthand for your CSS.

## Table of Contents

1. [Utility Classes](#utility-classes)
2. [Modifiers](#modifiers)
3. [Arbitrary Values](#arbitrary-values)
4. [Configuration](#configuration)
5. [Functions](#functions)
6. [Directives](#directives)
7. [Optimization](#optimization)
8. [Customization](#customization)
9. [Links](#links)

## Utility Classes

In Tailwind CSS, utility classes are small, single-purpose classes that can be used to apply specific styles to HTML elements. These classes are named based on the CSS property they control and the value they apply.

For example, the `bg-red-500` class can be used to set the background color of an element to red. Similarly, the `text-lg` class can be used to set the font size of text to large. Utility classes can also be combined to create more complex styles without the need for custom CSS. For example, you could combine the `bg-red-500`, `text-white`, and `px-4` classes to create a red button with white text and some padding:

```HTML
<button class="bg-red-500 text-white px-4 hover:bg-red-900">Click me!</button>
```

Utility classes in Tailwind CSS follow a consistent naming convention that makes it easy to understand what each class does. The naming convention consists of several parts:

- **The first part indicates the CSS property that the class controls** (e.g. `bg` for background color, `text` for text color, `border` for border styles, etc.).
- **The second part indicates the value that the class applies** (e.g. `red-500` for a specific shade of red, `lg` for large font size, `rounded` for rounded corners, etc.).
- **Additional parts may be added to modify or extend the behavior of the class** (e.g. `hover:`, `focus:`, `active:`, `dark:`, etc.).

[Back to Table of Contents](#table-of-contents)

## Utility Classes: Categories

Tailwind CSS utility classes are organized into several categories based on their functionality. These categories are:

- **Layout**: Utility classes for creating and managing layout and positioning of elements, such as display, float, and object-fit.
- **Flexbox & Grid**: Utility classes to use Flexbox or CSS Grid to create and manage layouts, such as flex-direction, flex-wrap, grid-template-columns, and grid-gap.
- **Spacing**: Utility classes for controlling the spacing of elements, such as padding, margin, and `* + *` (lobotomized owl).
- **Sizing**: Utility classes for controlling the sizing of elements, such as width, height, max-width, max-height, min-width, and min-height.
- **Typography**: Utility classes for controlling the typography of elements, such as font-size, font-weight, text-align, text-color, line-height, and text-decoration.
- **Backgrounds**: Utility classes for controlling the backgrounds of elements, such as bg-color, bg-image, bg-size, and bg-position.
- **Borders**: Utility classes for controlling the borders of elements, such as border, border-radius, border-color, and border-width.
- **Effects**: Utility classes for adding effects to elements, such as box-shadow and opacity.
- **Filters**: Utility classes for applying various filters to elements, such as blur, brightness, contrast, and grayscale.
- **Tables**: Utility classes for styling HTML tables, such as setting the table layout, border, and cell padding.
- **Transitions & Animations**: Utility classes for adding transitions (ex. transition-duration) and ready-made animations (ex. animate-spin).
- **Transforms**: Utility classes for applying transforms to elements, such as rotate, scale, and translate.
- **Interactivity**: Utility classes for adding interactivity to elements, such as cursor, caret-color, and scroll-behavior.
- **SVG**: Utility classes for styling SVG elements, such as setting the fill or stroke color, opacity, or stroke width.
- **Accessibility**: Ready-made utility classes to show an element to both sighted users and screen readers or to only show to screen readers.

[Back to Table of Contents](#table-of-contents)

## Modifiers

In Tailwind CSS, modifiers are used to adjust the behavior or appearance of utility classes. Modifiers can be applied using a colon (:) followed by the modifier name. The categories of modifiers in Tailwind CSS include:

- **Pseudo-element**: Modifiers for applying styles to pseudo-elements. A pseudo-element is used to style specified parts of an element.
  - **Content**: Modifiers for inserting content before or after specific elements, such as `before:` and `after:`.
  - **Style**: Modifiers for applying specific styles in an element, such as `first-line:`, `placeholder:`, `selection:`, and `backdrop:`.
- **Pseudo-class**: Modifiers for applying styles to pseudo-classes. A pseudo-class is used to define a special state of an element.
  - **Variants**: Modifiers for applying utility classes to specific elements based on their position within the document tree or their relationship with other elements, such as `first:`, `last:`, `even:`, and `odd:`.
  - **State**: Modifiers for controlling the appearance of elements in different states, such as `hover:`, `focus:`, `valid:`, and `disabled:`.
  - **Group**: Modifiers for controlling the appearance of elements based on parent state, such as `group-hover:`, `group-focus:`, and `group-active:`.
  - **Peer**: Modifiers for controlling the appearance of elements based on sibling state, such as `peer-invalid:`, `peer-focus:`, `peer-required:`, and `peer-disabled:`.
- **Responsive**: Modifier is used to apply utility classes at specific screen sizes, such as `sm:`, `md:`, `lg:`, and `xl:`.
- **!important**: Modifier is used to override any previously defined styles, even if they have a higher specificity, by adding a `!` character to the beginning. The `!` always goes at the beginning of the utility name, after any variants, but before any prefix. For example `sm:hover:!tw-font-bold`.

These modifiers provide additional flexibility and control when using the utility classes in Tailwind CSS.

[Back to Table of Contents](#table-of-contents)

## Arbitrary CSS

If you ever need to use a CSS property that Tailwind doesn’t include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS.

- **Arbitrary values**: When you find yourself really needing something like `top: 117px` to get a background image in just the right spot, use Tailwind’s square bracket notation to generate a class on the fly with any arbitrary value.

```HTML
<div class="top-[117px] text-[#333333]"></div>
```

- **Arbitrary properties**: If you ever need to use a CSS property that Tailwind doesn’t have a utility class for such as `mask-type`, you can also use square bracket notation to write completely arbitrary CSS. Provide both the property () and value separated by a colon inside the square brackets.

```HTML
<div class="[mask-type:luminance]"></div>
```

### Arbitrary Modifiers

Tailwind CSS let's you write custom selector modifiers. Simply wrap the custom modifier in square brackets and you're done!

- **Arbitrary variants**: Use custom variant modifier to style element based on their position within the document tree or their relationship with other elements. This arbitrary modifier selects an element and applies an underline only when it is the third child.

```JSX
<ul>
  {[1, 2, 3, 4, 5].map((item, i) => (
    <li className="[&:nth-child(3)]:underline" key={i}>
      {item}
    </li>
  ))}
</ul>
```

- **Arbitrary groups**: Use custom `group-*` modifiers to style element based on parent state. Mark the parent with the `group` class. This arbitrary modifier applies `block` class only when parent has `is-published` class.

```HTML
// p element is hidden - can't see the word Published
<div class="group">
  <p class="hidden group-[.is-published]:block">
    Published
  </p>
</div>
```

```HTML
// p element is shown - can see the word Published
<div class="group is-published">
  <p class="hidden group-[.is-published]:block">
    Published
  </p>
</div>
```

- **Arbitrary peers**: Use custom `peer-*` modifiers to style element based on sibling state. You can style an element based on the state of a sibling element. Mark the sibling with the `peer` class. This arbitrary modifier applies `block` class only when sibling has `show-sibling` class.

```HTML
// 2nd p element is not shown - can see the word First child only
<div>
  <p class="peer">
    First child
  </p>
  <p class="hidden peer-[.show-sibling]:block">
    Second child
  </p>
</div>
```

```HTML
// 2nd p element is shown - can see the words First child and Second child
<div>
  <p class="peer show-sibling">
    First child
  </p>
  <p class="hidden peer-[.show-sibling]:block">
    Second child
  </p>
</div>
```

[Back to Table of Contents](#table-of-contents)

## Resolving Ambiguities

Many utilities in Tailwind share a common namespace but map to different CSS properties. For example `text-lg` and `text-black` both share the `text-` namespace, but one is for font-size and the other is for color.

When using arbitrary values, Tailwind can generally handle this ambiguity automatically based on the value you pass in:

```HTML
// Will generate a font-size utility
<div class="text-[22px]">...</div>

// Will generate a color utility
<div class="text-[#BADA55]">...</div>
```

[Back to Table of Contents](#table-of-contents)

## Configuration

The `tailwind.config.js` file is a configuration file that allows you to configure and customize various aspects of your Tailwind CSS setup including defining custom colors, spacing, breakpoints, and more.

By default, `the tailwind.config.js` file exports an empty configuration object. However, you can add or override any properties you want to customize, such as colors, fonts, breakpoints, and more. You can also extend the default Tailwind CSS configuration by adding your own custom values or modifying existing ones.

Once you have made changes to your `tailwind.config.js` file, you need to recompile your CSS to reflect these changes. You can do this by running the build or watch command, depending on your setup.

```Javascript
module.exports = {
  theme: {
    colors: {
      primary: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
    gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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
```

In this example, the configuration file defines a custom color palette with shades of blue and gray, a custom font family with two font stacks, and custom font sizes, font weights, and text colors that extend the default theme.

The extend property is used to add or override theme values. For example, the `fontSize` property adds two custom font sizes (`2xl` and `3xl`), while the `fontWeight` property adds a custom font weight (`bold`). The `textColor` property adds custom gray shades (`600` and `800`) to the existing gray color palette and there are 2 custom values (`appName` and `appDescription`).

[Back to Table of Contents](#table-of-contents)

## Functions

CHECK IF THESE WORK - WIP - EXPLAIN BETTER  
Many of the customizations that you make in `tailwind.config.js` can be accessed through various Tailwind functions. These functions are used in your CSS code to access and apply the values and styles defined in `tailwind.config.js`.

- **`theme()`**: This function allows you to access and modify the default values of the theme in the `tailwind.config.js`, such as colors or font sizes.

```CSS
.my-class {
  font-size: theme('fontSize.2xl');
}
```

<!-- - **`extend()`**: This function is used to add new styles or modify existing ones in the Tailwind CSS framework. It takes an object as its argument, with each property representing a different class or set of classes to be added or modified.

- **`variants()`**: This function is used to generate responsive or state-based variants of utility classes. It takes a callback function as its argument, which returns an object with new variants for each responsive or state-based context. -->

- **`config()`**: This function allows you to access and modify any part of the `tailwind.config.js` file, such as the list of available classes, the prefixes used for variants, or the paths for custom plugins.

```CSS
// Accesses value
.btn-primary {
  background-color: config('theme.colors.blue.500');
}
```

```JSX
// Accesses value
const redColor = config('theme.colors.primary.100');

// Sets value in your tailwind.config.js file at runtime
config('theme.fontSize.xl', '1.5rem');

// Dynamically generate values
<div class="bg-{{config('colors.primary.500')}} text-{{config('fontWeights.bold')}} p-4">
  <h1 class="text-{{config('textSizes.2xl')}}">{{config('appName')}}</h1>
  <p class="text-{{config('textColors.gray.600')}}">{{config('appDescription')}}</p>
</div>
```

[Back to Table of Contents](#table-of-contents)

## Directives

CHECK IF THESE WORK - WIP - EXPLAIN BETTER

Directives allow you to apply existing utility classes to specific elements or contexts, such as hover or focus states, responsive breakpoints, or even arbitrary conditions.

- **`@apply`**: Apply Tailwind classes to a traditional CSS file. _Note: This directive does not work via CDN._

```HTML
// Give <a></a> a class name of your choice, ex. btn-primary
<a href="#" class="btn-primary">Learn More</a>
```

```CSS
// Apply utility classes to btn-primary class
.btn-primary {
  @apply bg-blue-500 text-white py-2 px-4 rounded;
}
```

- **`@layer`**: Specify where styles should be inserted in the final CSS output. It accepts the values base, components, utilities, and screens.

```CSS
// Create card utility class
@layer components {
  .card {
    @apply p-4 rounded-md shadow-md bg-white;
  }
}
```

```HTML
// Access card utility class
<div class="card">Card content goes here</div>
```

- **`@variants`**: Create variants of existing utility classes based on certain conditions, such as hover or focus.

```CSS
.btn {
  @variants hover, focus {
    @apply bg-blue-700 text-white;
  }
}
```

- **`@responsive`**: Define responsive variants for a group of utility classes

```CSS
.container {
  @responsive {
    max-width: 100%;
  }
}
```

- **`@screen`**: Define custom breakpoints for responsive design.

```CSS
@screen sm {
  .container {
    max-width: 640px;
  }
}
```

- **`@screen-reader`**: Define styles for screen reader only.

```CSS
.sr-only {
  @screen-reader {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
```

[Back to Table of Contents](#table-of-contents)

## @tailwind directives

CHECK IF THESE WORK - WIP - EXPLAIN BETTER

Tailwind organizes the styles it generates into three different “layers”:

- **The base layer** is for things like reset rules or default styles applied to plain HTML elements.
- **The components layer** is for class-based styles that you want to be able to override with utilities.
- **The utilities layer** is for small, single-purpose classes that should always take precedence over any other styles.

Use the `@layer` directive to tell Tailwind which "layer" a set of custom styles belong to. `@tailwind base`, `@tailwind components`, and `@tailwind utilities` are special directives that allow you to customize these default styles.

- **`@tailwind base`**: Used to add base styles to your website, such as typography rules and default color palettes. These styles are applied globally and can be overridden by more specific styles elsewhere in your CSS code.

```Javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  base: {
    'h1': { fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' },
    'p': { fontSize: '16px', lineHeight: '1.5', marginBottom: '16px' },
  },
}
```

- **`@tailwind components`**: Used to add styles to your website's components, such as buttons, forms, and navigation menus. These styles are applied to specific HTML elements and can be customized by adding class-based styles to these elements in your HTML or CSS code.

```Javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  components: {
    '.btn': {
      padding: '8px 16px',
      borderRadius: '4px',
      fontWeight: 'bold',
      backgroundColor: '#4CAF50',
      color: '#FFFFFF',
      '&:hover': { backgroundColor: '#3E8E41' },
    },
  },
}
```

- **`@tailwind utilities`**: Used to add custom utility classes to your website, which can be used to apply specific styles to HTML elements. This can be useful when there’s a CSS feature you’d like to use in your project that Tailwind doesn’t include utilities for out of the box.

```Javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  utilities: {
    '.text-shadow': { textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)' },
    '.bg-gradient': { backgroundImage: 'linear-gradient(to right, #ff416c, #ff4b2b)' },
  },
}

```

In a CSS file, adding the `@tailwind` directives injects Tailwind's base styles, component, and utility classes classes and any other styles registered by plugins. Additionally, you can use the `@layer` directive to add custom styles to a specific "layer". _Note: Any styles you add to Tailwind with `@layer` will automatically support Tailwind’s modifier syntax for handling things like hover states, responsive breakpoints, dark mode, and more._

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }

@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}
```

[Back to Table of Contents](#table-of-contents)

## Customization

In addition to using the `tailwind.config.js` file, functions, and directives, there are several other ways to customize Tailwind CSS:

- **Using plugins**: Tailwind CSS has an extensive plugin system that allows you to add new utility classes, components, and themes to your project. You can find many plugins on the official Tailwind CSS website, or you can create your own. Tailwind CSS also provides an API for creating and using plugins that extend the framework's functionality.
- **Using pre-built themes**: There are many pre-built Tailwind CSS themes available online that you can use to quickly change the look and feel of your website.
- **Using CSS-in-JS libraries**: If you prefer to write your CSS in JavaScript, you can use CSS-in-JS libraries like styled-components or emotion to create custom styles that integrate with Tailwind CSS.
- **Using CSS preprocessors**: Tailwind CSS supports CSS preprocessors like Sass and Less, which allow you to write more advanced CSS and take advantage of features like variables and mixins.
- **Manually adding custom CSS**: If you need to add custom CSS that is not supported by Tailwind CSS, you can do so by adding it to your HTML file or using a separate CSS file. However, this method should be used sparingly and only for specific cases where other customization options are not available.

[Back to Table of Contents](#table-of-contents)

## Optimization

Optimization is important in Tailwind CSS because it helps to reduce the size of the final CSS file. This in turn makes the page load quicker, improves code readability and maintainability, and reduces the risk of conflicts or error in the CSS code.

- **Use customization**: Tailwind CSS allows for a lot of customization through the `tailwind.config.js` file. It's important to use this customization instead of directly adding styles to the project's CSS files to ensure that the custom styles are consistent with the rest of the project.
- **Use `@apply` directive**: This directive lets you group multiple classes together and apply them to a single element. This can help reduce the amount of CSS you need to write and make your code more maintainable.
- **Use the `@layer` directive**: This directive allows you to organize your CSS code into layers, which can improve the readability and maintainability of your code.
- **Create reusable components**: Instead of repeating the same combination of utility classes in multiple places, you can create reusable components that contain the necessary styles. For example, if you have a button that appears in multiple places, you can create a Button component that contains the necessary utility classes. This way, you can avoid duplicating code and ensure that your styles are consistent across your project.
- **Use shorthand classes**: Tailwind provides several shorthand classes that let you apply multiple styles to a single element. For example, instead of writing `px-4 py-2 bg-white text-black font-bold`, you can write `p-2 bg-white text-black font-bold`.
- **Use responsive classes selectively**: Tailwind provides a set of responsive classes that let you apply styles based on the screen size. However, it's important to use these classes selectively and only apply the styles that are needed for each breakpoint. This can help keep your CSS file size down.
- **Purge unused styles**: By default, Tailwind includes a lot of classes that you may not need in your project. You can remove these unused classes by running the purge command during your build process. This will analyze your code and remove any unused classes from your CSS file.
- **Use JIT mode**: Tailwind's just-in-time (JIT) mode generates styles on the fly as they are needed, which can help reduce the size of your CSS file. To use JIT mode, set mode: 'jit' in your Tailwind configuration file.
<!-- - **Use a design system**: A design system is a set of guidelines, components, and assets that define the visual language of a project. By using a design system, you can ensure that your styles are consistent across your project and avoid repeating common utility combinations. Tailwind CSS can be a great foundation for building a design system because of its utility-based approach. -->

[Back to Table of Contents](#table-of-contents)

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

[Back to Table of Contents](#table-of-contents)
