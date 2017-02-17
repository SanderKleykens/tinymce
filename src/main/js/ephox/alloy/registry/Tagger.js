define(
  'ephox.alloy.registry.Tagger',

  [
    'ephox.alloy.ephemera.AlloyTags',
    'ephox.epithet.Id',
    'ephox.peanut.Fun',
    'ephox.perhaps.Option',
    'ephox.sugar.api.Attr',
    'ephox.sugar.api.Node',
    'ephox.sugar.api.SelectorFind'
  ],

  function (AlloyTags, Id, Fun, Option, Attr, Node, SelectorFind) {
    var prefix = AlloyTags.prefix();
    var idAttr = AlloyTags.idAttr();
    
    var write = function (label, elem) {
      var id = Id.generate(prefix + label);
      Attr.set(elem, idAttr, id);
      return id;
    };

    var writeOnly = function (elem, uid) {
      Attr.set(elem, idAttr, uid);
    };

    var read = function (elem) {
      var id = Node.isElement(elem) ? Attr.get(elem, idAttr) : null;
      return Option.from(id);
    };

    var find = function (container, id) {
      return SelectorFind.descendant(container, id);
    };

    var generate = function (prefix) {
      return Id.generate(prefix);
    };

    return {
      write: write,
      writeOnly: writeOnly,
      read: read,
      find: find,
      generate: generate,
      attribute: Fun.constant(idAttr)
    };
  }
);