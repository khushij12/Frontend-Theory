## What is Responsive Web Design?
- Responsive web design makes your web page look good on all devices.
- Web pages can be viewed using many different devices: desktops, tablets, and phones.
- It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.

## What is The Viewport?
- The viewport is the user's visible area of a web page.
- The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

## Setting The Viewport
```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
- The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
- The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

## What is a Grid-View?
- Many web pages are based on a grid-view, which means that the page is divided into columns:
- A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.

## Media Query Example of RWD:
- [Codepen](https://codepen.io/khushij12/pen/abQwVNY)
- For more details, go here.
  
## Orientation: Portrait / Landscape
- Media queries can also be used to change layout of a page depending on the orientation of the browser.
```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## Hide Elements With Media Queries
```css
/* If the screen size is 600px wide or less, hide the element */
@media only screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
```

## Change Font Size With Media Queries
- similar to above

# RWD for Images

## Using The width Property for responsive images
- If the width property is set to a percentage and the height property is set to "auto", the image will be responsive and scale up and down:
```css
img {
  width: 100%;
  height: auto;
}
```

## Using The max-width Property
- Notice that in the example above, the image can be scaled up to be larger than its original size.
```css
img {
  max-width: 100%;
  height: auto;
}
```

## For background images
- You can use the media query min-device-width, instead of min-width, which checks the device width, instead of the browser width. Then the image will not change when you resize the browser window:
```cs
/* For devices smaller than 400px: */
body {
  background-image: url('img_smallflower.jpg');
}

/* For devices 400px and larger: */
@media only screen and (min-device-width: 400px) {
  body {
    background-image: url('img_flowers.jpg');
  }
}
```

## The HTML <picture> Element
- The HTML <picture> element gives web developers more flexibility in specifying image resources.
- The most common use of the <picture> element will be for images used in responsive designs.
```css
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
  <source srcset="img_flowers.jpg">
  <img src="img_flowers.jpg" alt="Flowers">
</picture>
```

## you can always use frameworks like bootstrap to avoid all the above hustles.



