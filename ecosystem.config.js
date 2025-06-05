module.exports = {
  apps: [
    {
      name: 'topnetworks-co',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/html/topnetworks',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ],
};
