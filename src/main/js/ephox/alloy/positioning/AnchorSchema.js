define(
  'ephox.alloy.positioning.AnchorSchema',

  [
    'ephox.alloy.positioning.HotspotAnchor',
    'ephox.alloy.positioning.MakeshiftAnchor',
    'ephox.alloy.positioning.SelectionAnchor',
    'ephox.alloy.positioning.SubmenuAnchor',
    'ephox.boulder.api.ValueSchema'
  ],

  function (HotspotAnchor, MakeshiftAnchor, SelectionAnchor, SubmenuAnchor, ValueSchema) {
    return ValueSchema.choose(
      'anchor', {
        selection: SelectionAnchor,
        hotspot: HotspotAnchor,
        submenu: SubmenuAnchor,
        makeshift: MakeshiftAnchor
      }
    );
  }
);