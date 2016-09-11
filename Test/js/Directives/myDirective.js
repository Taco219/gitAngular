app.directive("myDirective", function () {
    return {
        template : "<h1>Made by a directive! {{ firstName }}</h1>"
    };
});