<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <p>test</p>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        
        @routes
        @viteReactRefresh
      
        @inertiaHead
        
    </head>
    <body class="font-sans antialiased bg-red-600 text-black">
        @inertia
        <p>hoi</p>
    </body>
</html>
