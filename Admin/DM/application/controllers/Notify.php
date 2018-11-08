<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Notify extends CI_Controller
{

/*
 *
 * autor: liluisjose1
 * controller: Notify
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
            $parameters_header = array(
                'users' => $this->Users_model->countUsers(),
                'notify' => $this->Notify_Model->countNotify(),
            );
            $data = array('notify' => $this->Notify_Model->getAll());

            $this->load->view('template/header', $parameters_header);
            $this->load->view('notify/index', $data);
            $this->load->view('template/footer');
        } else {
            header("location:" . base_url('login'));
        }
    }
    public function editState()
    {
        $id = $this->input->post('denuncia_id');
        $estado = $this->input->post('estado');
        $data = array(
            'estado' => $estado);
        $this->Notify_Model->editState($data, $id);
        header('Location:' . getenv('HTTP_REFERER'));

    }
}
