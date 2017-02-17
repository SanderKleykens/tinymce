configure({
  configs: [
    './prod.js'
  ],
  sources: [
    source('amd', 'ephox.alloy.test', '../../src/test/js/module', mapper.hierarchical),
    source('amd', 'ephox.agar', '../../lib/test', mapper.flat),
    source('amd', 'ephox.wrap.JQuery', '../../lib/test', mapper.flat),
    source('amd', 'ephox.jax', '../../lib/test', mapper.flat),
    source('amd', 'ephox.wrap.Jsc', '../../lib/test', mapper.flat)
  ]
});