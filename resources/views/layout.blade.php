<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Totem</title>
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body id="app">
        @yield('content')
        <script src="js/jquery.js"></script>
        <script src="js/foundation.js"></script>
        <script>
            $(document).foundation();
        </script>
    </body>
</html>
