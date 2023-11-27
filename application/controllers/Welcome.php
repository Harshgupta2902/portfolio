<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->helper('url');
        // $this->load->model('Createdata');
        // $this->load->library('form_validation');
        // $this->load->library('pagination');
        // $this->load->helper('alert_helper');
        // $this->load->library('Alert');
        // $this->load->library('M_pdf');

    }
	public function index()
	{
		$data['data'] = $this->db->query('select id,image,type from projects')->result_array();
		// print_r($data['0']['title']);
		// print_r($data);

		$this->load->view('index', $data);
	}
		public function details()
		{
			$id = $this->input->get('id');

			$data['data'] = $this->db->query('SELECT * FROM projects WHERE id = ' . $id)->result_array();
		
			$this->load->view('details', $data);
		}
}
