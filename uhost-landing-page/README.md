# uHost Landing Page

# CSS Theory

Cascading Style Sheets: Cascading means that multiple rules can apply to the same element

## Selectors

### Elements

- set equal style for the same elements

Syntax:

    h1 {

    }

### Classes

- set equal style for elements within the same class

Syntax:

    .blog-post {

    }

### IDs

- set style to one specific element

Syntax:

    #main-title {

    }

### Attributes

- set equal styles to all elements with attribute(s)

Syntax:

    [disabled] {

    }

### Universal

- this selector is rarely used. better to use body element, if want to set style for entire page.

Syntax:

    * {

    }

### Selector Specificity

Specificity resolves conflicts arising from multiple rules.

Order from highest to lowest:

- inline styles
- #ID selector
- .class, :pseudo-class and [attribute] selectors
- <Tag> and ::pseudo-element selectors

## Combinators

### Adjacent Sibling

- elements share the same parent
- second element comes immediately after first element

Syntax:

    div + p {

    }

### General Sibling

- elements share the same parent
- second element comes after first element, but does not need to be directly after

Syntax:

    div ~ p {

    }

### Child

- second element is a direct child of first element
- elements DO NOT need to share parent

Syntax:

    div > p {

    }

### Descendant

- second element is a descendant of the first element
- does not need to be a direct child
- most popular combinator to use

Syntax:

    div p {

    }

## Combined Selectors

You can combine selectors for classes, for example:

    <a class="some-class">Some Link</a>

Syntax:

    a.some-class

You can also use IDs, for example:

    <a id="some-id">Some Link</a>

Syntax:

    a#some-id

## Box Sizing Property

Property that determines how width and height are calculated.

Default value is: **content-box**. This means that padding and border are not taken into account. The width and height are only for the content.

Most common is: **border-box**; which means that padding and border are taken into account.

## Display Property

### Block-level Elements

Block-level elements are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom and two block-level elements will render in two different lines.

Some examples are: <div> , <section> , <article> , <nav> but also <h1> , <h2> etc and <p> .

To change inline elements to block elements, set to **display: block**

### Inline Elements

Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).

They also use the box-model you learned about but margin-top and margin-bottom have no effect on the element. padding-top and padding-bottom also have a different effect. They don't push the adjacent content away but they will do so with the element border.

Additionally, setting a width or height on an inline element also has no effect. The width and height is auto to take as much space as required by the content.

Logically, this makes sense since you don't want your inline elements to destroy your multi-line text-layout. If you want to do so or need both block-level and inline behavior, you can set **display: inline-block** to merge behaviors.

Some example elements are: <a> , <span> , <img>

### display: none vs visibility: none

display: none removes the element to which you apply it from the document flow. This means that the element is not visible and it also doesn't "block its position". Other elements can (and will) take its place instead.

If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use visibility: hidden;

## Pseudo Classes & Pseudo Elements

### Class

Defines the style of a special **state** of an element

Syntax:

    :class-name

#### Using the :not() pseudo class

Selects anything that is not specified:

Example:

    a:not(.active-class) {

    }

This will select any anchor tags that do not have the class active-class.

### Elements

Defines the style of a specific **part** of an element

Syntax:

    ::element-name

## !important

**Overwrites** specificity and all other selectors

In general: don't use !important. Use specificity and rules to style your website (and to write better CSS code in the end.)

Syntax:

    div {
      color: red !important;
    }

## Positioning Elements

static -> default

absolute -> takes element out of document flow. context is defined based on:

1. if none of the parent elements have a position property applied, then the positioning context is the HTML element (the main <html> tag for page)
2. if there are parent elements with a position property applied (for example, the parent has the relative position property applied), then the closest ancestor which has the position property applied is the positioning context of the element

relative -> does not take element out of document flow. positioned based on where element should originally/initially have been on page.

overflow -> what to do with overflow element. for example, if choose to hide, element will be hidden when it is outside its parent, which can happen if using position property.

fixed -> top, bottom, left, right are positioned based on viewport. takes element out of document flow, and can now adjust width/height of inline element.

sticky -> combination of relative and fixed. acts like a fixed element once a certain border is reached. element stops being fixed once it reaches the end of the content of its parent element.

## Units and Sizes

pixels (px) -> absolute length. mostly ignores user setting.

percentages (%) -> percentage is calculated by:

1. position: fixed -> viewport
2. position: absolute -> ancestor content + padding

- ancestor is the first ancestor that does not have position: static (default)

3. position: position: static or position: relative -> ancestor

- ancestor is the first ancestor that is a block element

root em (rem) -> font relative length. adjust to font size. 1em = 16px (default). takes font size of browser and multiplies it by rem.

em (em) -> font relative length. adjust to font size. 1em = 16px (default). inherits the sizes from ancestors, and can also be adjusted by browser settings.

viewport height (vh) -> adjust to current viewport. 100vh is 100% of viewport height.

viewport width (vw) -> adjust to current viewport. 100vw is 100% of viewport width.

### Recommended Unit for Properties

<table>
  <thead>
        <tr>
            <th>Property</th>
            <th>Recommended Unit</th>
        </tr>
    </thead>
    <tr>
        <td>font-size (root element)</td>
        <td>% or none</td>
    </tr>
    <tr>
        <td>font-size</td>
        <td>rem (em -> children only)</td>
    </tr>
    <tr>
        <td>padding</td>
        <td>rem</td>
    </tr>
    <tr>
        <td>border</td>
        <td>px</td>
    </tr>
    <tr>
        <td>margin</td>
        <td>rem</td>
    </tr>
    <tr>
        <td>width</td>
        <td>% or vw</td>
    </tr>
    <tr>
        <td>height</td>
        <td>% or vh</td>
    </tr>
    <tr>
        <td>top, bottom, left, right</td>
        <td>%</td>
    </tr>
</table>
