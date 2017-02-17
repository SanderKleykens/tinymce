define(
  'ephox.alloy.navigation.KeyRules',

  [
    'ephox.alloy.navigation.KeyMatch',
    'ephox.compass.Arr',
    'ephox.perhaps.Option'
  ],

  function (KeyMatch, Arr, Option) {
    var basic = function (key, action) {
      return {
        matches: KeyMatch.is(key),
        classification: action
      };
    };

    var rule = function (matches, action) {
      return {
        matches: matches,
        classification: action
      };
    };

    var choose = function (transitions, event) {
      var transition = Arr.find(transitions, function (t) {
        return t.matches(event);
      });

      return Option.from(transition).map(function (transition) {
        return transition.classification;
      });
    };

    return {
      basic: basic,
      rule: rule,
      choose: choose
    };
  }
);