**Holy Grail Solution**
The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.
![image](https://www.greatfrontend.com/img/questions/holy-grail/holy-grail-example.png)

There are a few main parts to achieving the specifications using flexbox. Let's dive into each.

**Sticky footer**
The Holy Grail layout problem also encompasses another classic problem: making a footer stick to the bottom of the screen when there is not enough content to fill up the page. This can be solved by adding min-height: 100vh to the container of the page's contents.

The header and footers are fixed heights and the columns are variable height and is meant to fill up any remaining space. To achieve this, flex-grow: 1 is added to the <div> wrapping the columns.

**Columns**
The requirement to make all the columns equal-height is also trivially solved with Flexbox. By adding display: flex to the div wrapper of the columns, this requirement is met.

flex-shrink: 0 has to be added to <nav> and <aside> so that they don't shrink when the content in <main> is too wide.


