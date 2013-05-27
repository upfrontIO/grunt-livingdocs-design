// Generated by CoffeeScript 1.3.3
(function() {

  this.livingdocs = this.livingdocs || {};

  this.livingdocs.bootstrap = {};

  this.livingdocs.bootstrap.templates = (function() {
    return {
      column: _.template("<div class=\"row-fluid\">\n  <div class=\"span8 offset2\" data-doc-container></div>\n</div>"),
      mainAndSidebar: _.template("<div class=\"row-fluid\">\n  <div class=\"span8\" data-doc-container=\"main\"></div>\n  <div class=\"span4\" data-doc-container=\"sidebar\"></div>\n</div>"),
      hero: _.template("<div class=\"hero-unit\">\n  <h1 data-doc-editable=\"title\">Titel</h1>\n  <p data-doc-editable=\"tagline\">Tagline</p>\n</div>"),
      title: _.template("<h1 data-doc-editable=\"title\">Titel</h1>"),
      subtitle: _.template("<h2 data-doc-editable=\"title\">Subtitle</h2>"),
      smallSubtitle: _.template("<h3 data-doc-editable=\"title\">Lorem ipsum dolorem</h3>"),
      text: _.template("<p data-doc-editable=\"text\">\n  Lorem ipsum dolorem. Lorem ipsum dolorem. Lorem ipsum dolorem\n</p>"),
      info: _.template("<div class=\"alert alert-info\" data-doc-editable=\"info\">\n  Lorem Ipsum dolorem\n</div>"),
      button: _.template("<button class=\"btn\" type=\"button\" data-doc-editable=\"button\">Button</button>"),
      largeButton: _.template("<button class=\"btn btn-block\" type=\"button\" data-doc-editable=\"button\">Large Button</button>"),
      image: _.template("<div class=\"img-polaroid\" data-doc-editable=\"image\">\n  Drag your image here...\n</div>", {
        separator: "<div>\n  <hr>\n</div>"
      })
    };
  })();

}).call(this);
