## Syntax
The @media at-rule may be placed at the top level of your code or nested inside any other conditional group at-rule.
```css
#at top level
@media screen and (min-width:600px) {
  body{
    color: green;
  }
}

#at nested level
@support (display:flex){
  @media screen and (min-width:600px) {
    body{
      display:flex;
    }
  }
}
```
## Description
<ul>
<li>Media types: print, screen, and all</li>
<li>Media features: Each media feature expression must be surrounded by parentheses.</li>
</ul>

## Media Types:
<ul>
<li><b>all</b>
  
Suitable for all devices.

<li><b>print</b>
  
Intended for paged material and documents viewed on a screen in print preview mode. </li>

<li><b>screen</b>
  
Intended primarily for screens.</li>
</ul>

## Media features

<details><summary>To not apply hover style on smartphone</summary>
  
- "any-hover" is a media characteristic that determines whether the device supports "hover".
- "any-hover: hover" is for hover-enabled devices (PCs, etc.), and "any-hover: none" is for hover-incompatible devices (smartphones, etc.).

```css
@media (any-hover: hover) {
  a:hover{
     background-color: orange;
  }
}

@media (any-hover: none) {
  a{
     background-color: yellow;
  }
}
```
</details>

<details><summary>How to check if there is any available input mechanism a pointing device, and if so, how accurate is it?</summary>
  
- "any-pointer" is a media characteristic that tests whether the user has any pointing device (such as a mouse), and if so, how accurate it is.
<ul>
<li>"any-pointer: none" for smartphones</li>
<li> "any-pointer: coarse" if any mouse like device is attached to smaller screens or phones</li>
<li>"any-pointer: fine" for PCs</li>
</ul>

```css
@media (any-pointer: fine) {
  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```
</details>


<details><summary>To change the style on basis of width to height ratio of users screen</summary>
  
- "aspect-ratio" is a media characteristic to test the aspect ratio of the viewport.

```css
/* Minimum aspect ratio */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue */
  }
}

/* Maximum aspect ratio */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff; /* cyan */
  }
}

/* Exact aspect ratio, put it at the bottom to avoid override*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* red */
  }
}
```
</details>

<details><summary>To know if color is support user device or not</summary>
  
- "color" is a media characteristic to test the number of bits per color component.

```css
p {
  color: black;
}

/* Any color device */
@media (color) {
  p {
    color: red;
  }
}

/* Any color device with at least 8 bits per color component */
@media (min-color: 8) {
  p {
    color: #24ba13;
  }
}

@media (not color) {
  p {
    /* Apply styles for devices that do not support color */
    /* Adjust button styles for grayscale or simpler appearance */
  }
}
```
</details>

<details><summary>How to know whether it is launched a site from a URL and or from a desktop icon.</summary>
  
- "display-mode"
- "display-mode: fullscreen" All of the available display area is used and no user agent chrome is shown.
- "display-mode: standalone" they are generally called "smartphone apps", 
- "display-mode: minimal-ui" The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. 
- "display-mode: browser" The application opens in a browser 
- "display-mode: window-controls-overlay" In this mode, the application looks and feels like a standalone desktop application, and the Window Controls Overlay feature is enabled.

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```
</details>

<details><summary>How to apply styles based on the height of the viewport</summary>
  
- "height"
```css
/* Exact height */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Minimum height */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Maximum height */
@media (max-height: 40rem) {
  div {
    border: 2px solid blue;
  }
}
```
</details>

<details><summary>Difference between hover and any:hover</summary>
  
- hover:
The hover media feature is used to apply styles when the user's input device (like a mouse or touchpad) hovers over an element. 
- any-hover:
The any-hover media feature is similar to hover, but it represents a broader category. It is used to apply styles when the user's primary input mechanism supports the concept of hovering, regardless of whether the device currently used actually has a hovering capability.
</details>

<details><summary>How to test the orientation of the viewport </summary>
  
- "orientation:portrait" the height is greater than or equal to the width.
- "orientation:landscape" the height is less than or equal to the width.
</details>
