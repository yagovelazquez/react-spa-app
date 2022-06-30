module.exports = {
    apps : [{
      name   : "portifolio-backend",
      script : "src/server.js",
      env_production: {
         NODE_ENV: "production",
         NODE_CONFIG_DIR: "./src/config",
         max_memory_restart: '300M' 
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
  }