@extends('layout')
@section('content')
<h1>Accueil</h1>
    <?php
            $dbb = $_ENV['DB_CONNECTION'];
    $con = new  App\User;
        Mail::raw('Laraval', function($message) {
            $message->from('totem.dev@gmail.com');
            $message->to('m.petronio91@gmail.com');
        });
            //var_dump($con->create(['name' => 'max', 'email' => 'm.petro@gmail.com', 'password' => 'free']));

    ?>
@stop