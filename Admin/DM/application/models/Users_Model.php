<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Users_Model extends CI_Model
{

/*
 *
 * autor: liluisjose1
 * Model: Users_Model
 * materia: Ing. de Software UES-FMO
 *
 */
    protected $table = "tbl_users";

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
    public function saveUser($parameters)
    {
        $this->db->insert($this->table, $parameters);
    }
    public function delUser($id)
    {
        $this->db->where('id', $id);
        $this->db->delete($this->table);
    }
    public function countUsers()
    {
        $this->db->from($this->table);
        $query = $this->db->get();
        return $query->num_rows();

    }
    public function login($parameters)
    {
        $user = $parameters['usuario_id'];
        $pass = $parameters['clave'];

        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('usuario_id', $user, 'and clave', $pass, 'and estado', 1);
        $query = $this->db->get();
        return $query->row();
    }
}
