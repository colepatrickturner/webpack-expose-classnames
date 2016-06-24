module.exports = function(source, map) {
  this.cacheable();

  var callback = this.async();
  var query = this.query;
  if(typeof query == 'string')
  {
    query = { scope: query };
  }

  source += "\n";

  var regex = new RegExp("class ([a-zA-Z0-9]+)((\s*)extends [a-zA-Z0-9]+)*(\s*){", "gm");
  var matches = source.match(regex);
  if(matches)
  {
      matches.forEach(function(match)
      {
        var className = match[1];

        var append = "if(typeof "+className+" != 'undefined') { "+query.scope+"."+className+" = "+className+"; }\n";
        source += append;
      });
  }

  callback(null, source, map)
};
