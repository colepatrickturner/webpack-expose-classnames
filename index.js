module.exports = function(source, map) {
  this.cacheable();

  var callback = this.async();
  var query = this.query && this.query != "?" ? this.query.substring(1) : "global";

  source += "\n";

  var regex = /class\s*([a-zA-Z0-9\.\_\-]+)((\s*)extends(\s*)[a-zA-Z0-9\.\_\-]+)*(\s*){/gmi;
  var matches = source.match(regex);

  if(matches)
  {
    var match;
    while (match = regex.exec(source))
    {
      if(match.length > 1)
      {
        var className = match[1];

        var append = "if(typeof "+className+" != 'undefined') { "+query+"."+className+" = "+className+"; }\n";
        source += append;
      }
    }
  }

  callback(null, source, map)
};
