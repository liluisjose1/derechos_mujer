<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Welcome extends CI_Controller
{

/*
 *
 * autor: liluisjose1
 * controller: Welcome
 * materia: Ing. de Software UES-FMO
 *
 */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Users_model');
        $this->load->model('Notify_Model');
        $this->load->library('session');

    }
    public function index()
    {
        if ($_SESSION['logged_in'] == true) {
            $parameters_header = array(
                'users' => $this->Users_model->countUsers(),
                'notify' => $this->Notify_Model->countNotify(),
            );
            $this->load->view('template/header', $parameters_header);
            $this->load->view('dashboard');
            $this->load->view('template/footer');
        } else {
            header("location:" . base_url('login'));
        }
    }
}
