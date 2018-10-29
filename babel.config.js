const presets = [
  [
    "@babel/env", {
      "targets": {
        "node": "current"
      }
    }
  ]
];

const plugins = [
  [
    "module-resolver",
    {
      "root": [ "./src" ],
      "extensions": [ ".js" ],
      "alias": {
        "flow-typed": "./flow-typed",
        "sequelize": "sequelize"
      }
    }
  ]
]

module.exports = { presets, plugins };
