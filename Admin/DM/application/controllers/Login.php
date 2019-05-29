<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{

/*
 *
 * autor: liluisjose1
 * controller: Login
 * materia: Ing. de Software UES-FMO
 *
 */
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->model('Users_Model');

    }
    public function index()
    {
        $this->load->view('login/index');
    }
    public function validate()
    {
        $user = $this->input->post('usuario');
        $pass = $this->input->post('contra');

        $parameters = array(
            'usuario_id' => $user,
            'clave' => $pass,
            'estado' => '1',
        );
        $user = $this->Users_Model->login($parameters);
        if (!empty($user)) {
            $newdata = array(
                'user' => $user->usuario_id,
                'nombre' => $user->nombre.' '.$user->apellido,
                'email' => $user->correo,
                'logged_in' => true,
            );
            $this->session->set_userdata($newdata);
            header('location: '.base_url('welcome'));
        } else {
            header('location: '.base_url('login'));
        }
    }
    public function logout(){
        $this->session->sess_destroy();
        header('location: '.base_url('login'));

    }
}
