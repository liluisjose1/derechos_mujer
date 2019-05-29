<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Notify_Model extends CI_Model
{

/*
 *
 * autor: liluisjose1
 * Model: Notify_Model
 * materia: Ing. de Software UES-FMO
 *
 */
    protected $table = "tbl_notificaciones";

    public function __construct()
    {
        parent::__construct();
        $this->load->database('default');
    }
    public function getAll()
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->order_by(1, 'DESC');
        $query = $this->db->get();
        return $query->result();
    }
    public function getAllUser($id)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('id_usuario', $id);
        $query = $this->db->get();
        return $query->result();
    }

    public function countNotify()
    {
        $this->db->from($this->table);
        $query = $this->db->get();
        return $query->num_rows();

    }
    public function editState($data,$id){
        $this->db->where('id', $id);
        $this->db->update($this->table, $data);
        //return print_r($data);
    }
    public function save($parameters)
    {
        $this->db->insert($this->table, $parameters);
    }
}
