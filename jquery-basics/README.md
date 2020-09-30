# jQuery Basics

Basic usage notes for jQuery JavaScript library.

### Add to Site

jQuery website: https://jquery.com

Add the following to header section of HTML file:

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"   integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="   crossorigin="anonymous"></script>

### How to Use

- use either $() or jQuery() (must people use the $ notation)

### Selecting Elements

    $("h1");

Same as:

    document.querySelector("h1");

NOTE: If there are multiple h1 elements, all will be selected.

### Manipulating Styles

Set property:

    $("h1").css("color", "red");

Get property:

    $("h1").css("color");

Add class:

    $("h1").addClass("class-title");

Remove class:

    $("h1").removeClass("class-title");

Dealing with multiple classes:

    $("h1").addClass("class-title class-title2 class-title3");

Check if element has class:

    $("h1").hasClass("class-title");

### Manipulating Text

Change text:

    $("h1").text("Bye");

Same as:

    document.querySelector("h1").innerHTML = "Bye";

Therefore, this will also work:

    $("h1").text("<em>Bye</em>");

NOTE: if there are multiple elements selected, you can change the text of multiple elements at once. For example, if you have multiple buttons on the screen, and run this:

    $("button").text("Click me");

The text for all of the buttons will be changed to "Click me", unlike with querySelector(), where you need to iterate through all of them to change the text.

### Manipulating Attributes

Get attribute:

    $("img").attr("src");

Set attribute:

    $("img").attr("src", "images/image.png");

### Event Listeners

Add event listener:

    $("h1").click([callback_function]);

NOTE: if there are multiple h1 elements, you can add an event listener for each of the elements at once with the line above.

Example -> add listener for all key presses while on page:

    $(document).keydown([callback_function]);

Example -> add listener for mouse over event on element:

    $("h1").on("mouseover", [callback_function]);

### Adding Elements

Add element before another:

    $("h1").before("<button>New</button>");

This will add a button element before the h1 element, i.e:

    <button>New</button><h1>Hello</h1>

Add element after another:

    $("h1").after("<button>New</button>");

This will add a button element after the h1 element, i.e:

    <h1>Hello</h1><button>New</button>

Prepend element:

    $("h1").prepend("<button>New</button>");

This will add the button within the h1 element, before the current innerHTML, i.e:

    <h1><button>New</button>Hello</h1>

Append element:

    $("h1").append("<button>New</button>");

This will add the button within the h1 element, after the current innerHTML, i.e:

    <h1>Hello<button>New</button></h1>

### Removing Element

    $("button").remove();

This will get rid of all of the buttons in the current web page.

### Common Methods and Animations

Show/hide element(s):

    $("h1").show();

    $("h1").hide();

    $("h1").toggle();

Fade out/in element(s):

    $("h1").fadeOut();

    $("h1").fadeIn();

    $("h1").fadeToggle();

Slide element(s) in/out:

    $("h1").slideUp();

    $("h1").slideDown();

    $("h1").slideToggle();

Example: useful for a dropdown menu

### Custom Animations

    $("h1").animate([css_rule]);

Example:

    $("h1").animate({ opacity: 0.5 });

NOTE: CSS rule can only be one that has a numeric value, i.e. margin. padding, etc. not changing colors, etc.

Chaining Methods:

    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
