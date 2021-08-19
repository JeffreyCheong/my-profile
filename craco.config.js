const path = require(`path`);

module.exports = {
    webpack: { 
        '@': path.resolve(__dirname, 'src/'),
        '@Component': path.resolve(__dirname, 'src/components'),
        '@View': path.resolve(__dirname, 'src/views'),
        '@Util': path.resolve(__dirname, 'src/utils'),
        '@Hook': path.resolve(__dirname, 'src/hooks'),
        '@Feature': path.resolve(__dirname, 'src/app/features'),
    }
}