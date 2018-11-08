<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Users extends CI_Controller
{
/*
 *
 * autor: liluisjose1
 * controller: Users
 * materia: Ing. de Software UES-FMO
 *
 */
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->model('Users_model');
        $this->load->model('Notify_Model');
    }

    public function index()
    {
        if ($_SESSION['logged_in'] == true) {
            $usuarios = $this->Users_model->getAll();

            $parameters_header = array(
                'users' => $this->Users_model->countUsers(),
                'notify' => $this->Notify_Model->countNotify(),
            );

            $data = array(
                "users" => $usuarios,
            );

            $this->load->view('template/header', $parameters_header);
            $this->load->view('usuarios/user', $data);
            $this->load->view('template/footer');
        } else {
            header("location:" . base_url('login'));
        }

    }
    public function edit()
    {
        $usuarios = "Luis";

        $parameters_header = array(
            'title' => "Usuarios DM",
            'page' => "USUARIOS",
        );

        $data = array(
            "users" => $usuarios,
        );

        $this->load->view('template/header', $parameters_header);
        $this->load->view('usuarios/edit', $data);
        $this->load->view('template/footer');
    }
    public function update(){
        //methos actualizar usuario...
        
    }
    public function add()
    {
        $correo = $this->input->post("correo");
        $nombre = $this->input->post("nombre");
        $apellido = $this->input->post("apellido");
        $usuario = $this->input->post("usuario");
        $pass = hash('sha512', $this->input->post("pass"));
        $fecha = date("Y-m-d");
        $parametros = array(
            'correo' => $correo,
            'nombre' => $nombre,
            'apellido' => $apellido,
            'usuario_id' => $usuario,
            'clave' => $pass,
            'registro_fecha' => $fecha,
            'estado' => 1,
        );
        $consul = $this->Users_model->saveUser($parametros);
        if ($consul) {
            header('Location:' . getenv('HTTP_REFERER'));
        } else {
            echo "<script>alert('Error al Insertar');</script>";
            header('Location:' . getenv('HTTP_REFERER'));
        }
    }
    public function getUser()
    {
        $user = $this->input->post('usuario');
        $usuario = $this->Users_model->getUserById($user);
        echo json_encode($usuario);
    }
    public function delUser()
    {
        $user = $this->input->post('usuario');
        $usuario = $this->Users_model->delUser($user);
    }
}
