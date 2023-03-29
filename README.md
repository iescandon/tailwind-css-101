# Tailwind CSS 101

Tailwind CSS is a utility-first CSS framework that provides a collection of pre-designed CSS classes to create user interfaces quickly. It's designed to be highly customizable, and provides a set of building blocks that can be combined to create complex layouts and designs with minimal custom CSS. All without any annoying opinionated styles you have to fight to override.

Tailwind CSS works by providing a set of utility classes that correspond to specific CSS properties, such as text color, padding, margin, and more. These classes can be applied directly to HTML elements to quickly apply the desired styles. For example, the class "bg-blue-500" can be used to set the background color of an element to a specific shade of blue.

Similar to regular CSS, there are no ready-made components provided for you. Simply, add the utility classes in your HTML, and watch how Tailwind automatically attaches the styles for you! You can think of it as shorthand for your CSS.

- [Codepen: Styled with Regular CSS](https://codepen.io/mexicode/pen/ZEMXJKP)
- [Codepen: Styled with Tailwind CSS](https://codepen.io/mexicode/pen/ZEMXpYm)
- [Github: Styled with Tailwind CSS + Optimization](https://tailwind-css-101.vercel.app/)


## Utility Classes
In Tailwind CSS, utility classes are small, single-purpose classes that can be used to apply specific styles to HTML elements. These classes are named based on the CSS property they control and the value they apply.

For example, the `bg-red-500` class can be used to set the background color of an element to red. Similarly, the `text-lg` class can be used to set the font size of text to large. Utility classes can also be combined to create more complex styles without the need for custom CSS. For example, you could combine the `bg-red-500`, `text-white`, and `px-4` classes to create a red button with white text and some padding:
```
<button class="bg-red-500 text-white px-4">Click me!</button>
```

Utility classes in Tailwind CSS follow a consistent naming convention that makes it easy to understand what each class does. The naming convention consists of several parts:
- **The first part indicates the CSS property that the class controls** (e.g. bg for background color, text for text color, border for border styles, etc.).
- **The second part indicates the value that the class applies** (e.g. red-500 for a specific shade of red, lg for large font size, rounded for rounded corners, etc.).
- **Additional parts may be added to modify or extend the behavior of the class** (e.g. hover, focus, active, dark, etc.).

### Categories
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








