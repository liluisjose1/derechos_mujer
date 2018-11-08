<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Users_App_Model extends CI_Model
{

/*
 *
 * autor: liluisjose1
 * Model: Users_App_Model
 * materia: Ing. de Software UES-FMO
 *
 */
    protected $table = "tbl_app_users";

    public function __construct()
    {
        parent::__construct();
        $this->load->database('default');
    }

    public function getAll()
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $query = $this->db->get();
        return $query->result();
    }
    public function getUserById($id)
    {
        $this->db->from($this->table);
        $this->db->where('id', $id);
        $query = $this->db->get();
        return $query->row();
    }
    public function getUserByUser($id)
    {
        $this->db->from($this->table);
        $this->db->where('usuario', $id);
        $query = $this->db->get();
        return $query->row();
    }
    public function getUserValidate($user,$pass)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where("contra",$pass);
        $query = $this->db->get();
        return $query->row();
    }
    public function saveUser($parameters)
    {
        $this->db->insert($this->table, $parameters);
    }
}
