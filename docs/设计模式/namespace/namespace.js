var MYAPP = MYAPP || {};
MYAPP.namespace = function(ns_string) {
  let parts = ns_string.split('.'), parent = MYAPP;
  if (parts[0] === 'MYAPP') {
    parts = parts.slice(1);
  }
  for (let i = 0; i < parts.length; i++) {
    if (typeof parent[part[i] === undefined]) {
      parent[part[i]] = {};
    }
    parent = parent[part[i]];
  }
  return parent;
}