const presets = [
  [
    "@babel/env"
  ],
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
