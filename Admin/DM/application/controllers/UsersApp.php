<?php
defined('BASEPATH') or exit('No direct script access allowed');

class UsersApp extends CI_Controller
{

/*
 *
 * autor: liluisjose1
 * controller: UsersApp
 * materia: Ing. de Software UES-FMO
 *
 */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Users_App_Model');
        $this->load->model('Notify_Model');
        $this->load->model('Users_Model');
        $this->load->library('session');

    }
    public function index()
    {
        $json = file_get_contents('php://input');

        // decoding the received JSON and store into $obj variable.
        $obj = json_decode($json, true);
        $id_usuario = $obj['id_usuario'];

        $usuarios = $this->Notify_Model->getAllUser($id_usuario);
        echo json_encode($usuarios);
    }
    public function getUser()
    {

        $json = file_get_contents('php://input');

        // decoding the received JSON and store into $obj variable.
        $obj = json_decode($json, true);

        $user = $this->Users_App_Model->getUserValidate($obj['usuario'], hash('sha512', $obj['contra']));
        if (!empty($user)) {
            echo json_encode(0);
        } else {
            echo json_encode(1);
        }
    }
    public function etc()
    {
        $json = file_get_contents('php://input');

        // decoding the received JSON and store into $obj variable.
        $obj = json_decode($json, true);
        $usuario = $obj['usuario'];
        $contra = hash('sha512', $obj['contra']);
        $user = $this->Users_App_Model->getUserValidate($usuario, $contra);
        if ($usuario == $user->usuario && $contra == $user->contra) {
            echo json_encode(0);
        } else {
            echo json_encode(1);
        }
    }
    public function save()
    {
        $json = file_get_contents('php://input');

        // decoding the received JSON and store into $obj variable.
        $obj = json_decode($json, true);

        $parameters = array(
            'nombre' => $obj['nombre'],
            'usuario' => $obj['usuario'],
            'contra' => hash('sha512', $obj['contra']),
        );
        $allUsers = $this->Users_App_Model->getUserByUser($obj['usuario']);
        if (empty($allUsers)) {
            $users = $this->Users_App_Model->saveUser($parameters);
            if ($users == false) {
                // If the record inserted successfully then show the message.
                $MSG = 0;
                // Converting the message into JSON format.
                $json = json_encode($MSG);
                // Echo the message.
                echo $json;
            } else {
                echo json_encode(1);
            }
        } else {
            echo json_encode(2);

        }
    }
    public function denuncia()
    {
        $json = file_get_contents('php://input');

        // decoding the received JSON and store into $obj variable.
        $obj = json_decode($json, true);
        $parameters = array(
            'id_usuario' => $obj['id_usuario'],
            'direccion' => $obj['direccion'],
            'longitud' => $obj['longitud'],
            'latitud' => $obj['latitud'],
            'descripcion' => $obj['descripcion'],
            'estado' => 0,
            'fecha_notificacion' => date('Y-m-d'),
        );
        $users = $this->Notify_Model->save($parameters);
        if ($users == false) {
            // If the record inserted successfully then show the message.
            $MSG = 0;
            // Converting the message into JSON format.
            $json = json_encode($MSG);
            // Echo the message.
            echo $json;
        } else {
            echo json_encode(1);
        }
    }
}
