'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //集群部署时，API需要加上mall-admin路径
  BASE_API: '"http://172.16.33.161:8201/mall-admin"'
})
