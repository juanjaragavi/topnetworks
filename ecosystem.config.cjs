module.exports = {
  apps: [{
    name: 'topnetworks-astro',
    script: 'npm',
    args: 'run preview',
    cwd: '/var/www/html/topnetworks',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000,
      HOST: '0.0.0.0',
      VITE_HOST: '0.0.0.0',
      VITE_DISABLE_HOST_CHECK: 'true',
      DANGEROUSLY_DISABLE_HOST_CHECK: 'true'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    restart_delay: 4000,
    max_restarts: 10
  }]
};
