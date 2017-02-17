define(
  'ephox.alloy.alien.OffsetOrigin',

  [
    'ephox.sugar.alien.Position',
    'ephox.sugar.api.Element',
    'ephox.sugar.api.Insert',
    'ephox.sugar.api.Location',
    'ephox.sugar.api.Remove',
    'ephox.sugar.api.Traverse'
  ],

  function (Position, Element, Insert, Location, Remove, Traverse) {
    /*
     * This returns the position of the offset parent excluding any scroll. That 
     * means that the absolute coordinates can be obtained by adding the origin 
     * to the offset coordinates and not needing to know scroll.
     */
    var getOrigin = function (element, scroll) {
      return Traverse.offsetParent(element).orThunk(function () {
        var marker = Element.fromTag('span');
        Insert.before(element, marker);
        var offsetParent = Traverse.offsetParent(marker);
        Remove.remove(marker);
        return offsetParent;
      }).map(function (offsetP) {
        var loc = Location.absolute(offsetP);
        return loc.translate(-scroll.left(), -scroll.top());
      }).getOrThunk(function () {
        return Position(0, 0);
      });
    };

    return {
      getOrigin: getOrigin
    };
  }
);