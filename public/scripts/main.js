requirejs.config({
    baseUrl: '/scripts/',
    paths: {
        lib: '/vendor'
    }
});

requirejs(['Join4'], function (Join4) {
    alert('test');
});
