<?php

class Cl_Controller extends CI_Controller
{
    // public function __construct() {
    //     parent::__construct();
    //     /*group by issue skip*/
    //     $this->db->query("SET sql_mode=(SELECT REPLACE(@@sql_mode, 'ONLY_FULL_GROUP_BY', ''));");

    //     $file_pointer = str_rot13('nffrgf/oyhrvzc/ERFG_NCV.wfba');
    //        if (file_exists($file_pointer)) {
    //            $file_content = file_get_contents($file_pointer);
    //            $json_data = json_decode($file_content, true);
    //            $installation_date = $json_data['date'];
    //            $meta_date = date("Y-m-d", filectime($file_pointer) - 86400);

    //            if ($installation_date != $meta_date) {
    //                echo $this->load->view('waste/REST_API_JSON.php', '', TRUE);
    //                die();
    //            }
    //        }else {
    //            echo $this->load->view('waste/REST_API_JSON.php', '', TRUE);
    //            die();
    //        }

    //       $file_pointer_i = str_rot13('nffrgf/oyhrvzc/ERFG_NCV_V.wfba');
    //        if (file_exists($file_pointer_i)) {
    //            $file_content_i = file_get_contents($file_pointer_i);
    //            $json_data_i = json_decode($file_content_i, true);

    //            $installation_url = str_replace('www.','',str_replace('https://','',str_replace('','',str_replace('http://','',str_rot13($json_data_i['installation_url'])))));
    //            $separate_url = explode('/', $installation_url);
    //            $installation_url = str_replace('www.','',str_replace('https:','',str_replace('','',str_replace('http://','',(isset($separate_url[0]) && $separate_url[0]?$separate_url[0]:str_rot13($json_data_i['installation_url']))))));
    //            $server_url = (checkH())?str_rot13('ybpnyubfg'):str_replace('www.','',$_SERVER['SERVER_NAME']);

    //            if (str_rot13($server_url) != 'ybpnyubfg') {
    //                if ($installation_url != ($server_url)) {
    //                    echo $this->load->view('waste/REST_API_JSONS.php', '', TRUE);
    //                    die();
    //                }
    //            }else{
    //                $installation_url = str_replace('www.','',str_replace('https:','',str_replace('/','',str_replace('http://','',str_rot13($json_data_i['installation_url'])))));
    //                $first_segment = explode('/', $_SERVER['REQUEST_URI']);
    //                $installation_url_new = (checkHH())?str_rot13('ybpnyubfg').$first_segment[1]:str_replace('www.','',str_replace('https:','',str_replace('/','',str_replace('http://','',$_SERVER['HTTP_HOST'].$first_segment[1]))));
    //                if ($installation_url != ($installation_url_new)) {
    //                    echo $this->load->view('waste/REST_API_JSONS.php', '', TRUE);
    //                    die();
    //                }
    //            }
    //        }else {
    //            echo $this->load->view('waste/REST_API_JSONS.php', '', TRUE);
    //            die();
    //        }

    //     $file_pointer_uv = str_rot13('nffrgf/oyhrvzc/ERFG_NCV_HI.wfba');
    //     if (file_exists($file_pointer_uv)) {
    //         $file_content_uv = file_get_contents($file_pointer_uv);
    //         $json_data_uv = json_decode($file_content_uv, true);
    //         $version = $json_data_uv['version'];
    //         $mode = APPLICATION_lcl;
    //         if($mode=="lcl"){
    //             $version = '1.1';
    //         }
    //         $this->session->set_userdata('system_version_number',$version);
    //     }
    //     $file_wlb = str_rot13('serdhrag_punatvat/jyo.wfba');
    //     if (file_exists($file_wlb)) {
    //         $file_content_wlb = file_get_contents($file_wlb);
    //         $json_data_wlb = json_decode($file_content_wlb, true);
    //         $this->session->set_userdata('wlb',$json_data_wlb);
    //     }
    // }

    public function __construct()
    {
        parent::__construct();

        // Disable ONLY_FULL_GROUP_BY
        $this->db->query("SET sql_mode=(SELECT REPLACE(@@sql_mode, 'ONLY_FULL_GROUP_BY', ''));");

        /*
         * ------------------------
         * 1. REST_API.json: Installation Date Validation & Auto Setup
         * ------------------------
         */
        $file_pointer = str_rot13('nffrgf/oyhrvzc/ERFG_NCV.wfba');  // assets/blueimc/REST_API.json

        if (!file_exists($file_pointer)) {
            $data = ['date' => date('Y-m-d')];
            file_put_contents($file_pointer, json_encode($data, JSON_PRETTY_PRINT));
        } else {
            $file_content = file_get_contents($file_pointer);
            $json_data = json_decode($file_content, true);
            $installation_date = $json_data['date'];
            $meta_date = date('Y-m-d', filectime($file_pointer) - 86400);

            if ($installation_date != $meta_date) {
                $json_data['date'] = $meta_date;
                file_put_contents($file_pointer, json_encode($json_data, JSON_PRETTY_PRINT));
            }
        }

        /*
         * ------------------------
         * 2. REST_API_V.json: Domain Validation & Auto-Fix
         * ------------------------
         */
        $file_pointer_i = str_rot13('nffrgf/oyhrvzc/ERFG_NCV_V.wfba');  // assets/blueimc/REST_API_V.json

        if (!file_exists($file_pointer_i)) {
            // Auto-generate domain file on first run
            $current_domain = str_replace(['http://', 'https://', 'www.'], '', $_SERVER['HTTP_HOST']);
            $data = ['installation_url' => str_rot13($current_domain)];
            file_put_contents($file_pointer_i, json_encode($data, JSON_PRETTY_PRINT));
        } else {
            $file_content_i = file_get_contents($file_pointer_i);
            $json_data_i = json_decode($file_content_i, true);

            $installation_url = str_replace(['www.', 'https://', 'http://'], '', str_rot13($json_data_i['installation_url']));
            $separate_url = explode('/', $installation_url);
            $installation_url = isset($separate_url[0]) ? $separate_url[0] : $installation_url;

            $server_url = (checkH()) ? str_rot13('ybpnyubfg') : str_replace('www.', '', $_SERVER['SERVER_NAME']);

            if (str_rot13($server_url) != 'ybpnyubfg') {
                if ($installation_url != $server_url) {
                    // Auto-fix the file with current domain
                    $json_data_i['installation_url'] = str_rot13($server_url);
                    file_put_contents($file_pointer_i, json_encode($json_data_i, JSON_PRETTY_PRINT));
                }
            } else {
                $first_segment = explode('/', $_SERVER['REQUEST_URI']);
                $installation_url_new = (checkHH()) ? str_rot13('ybpnyubfg') . $first_segment[1] : str_replace(['www.', 'https://', 'http://', '/'], '', $_SERVER['HTTP_HOST'] . $first_segment[1]);
                if ($installation_url != $installation_url_new) {
                    // Fix for localhost path-based install
                    $json_data_i['installation_url'] = str_rot13($installation_url_new);
                    file_put_contents($file_pointer_i, json_encode($json_data_i, JSON_PRETTY_PRINT));
                }
            }
        }

        /*
         * ------------------------
         * 3. REST_API_UI.json: Version Set & Auto-Fix
         * ------------------------
         */
        $file_pointer_uv = str_rot13('nffrgf/oyhrvzc/ERFG_NCV_HI.wfba');  // assets/blueimc/REST_API_UI.json

        if (!file_exists($file_pointer_uv)) {
            $version = '1.0';  // default version
            if (defined('APPLICATION_lcl') && APPLICATION_lcl == 'lcl') {
                $version = '1.1';
            }
            $data = ['version' => $version];
            file_put_contents($file_pointer_uv, json_encode($data, JSON_PRETTY_PRINT));
        }

        $file_content_uv = file_get_contents($file_pointer_uv);
        $json_data_uv = json_decode($file_content_uv, true);
        $version = $json_data_uv['version'];
        if (defined('APPLICATION_lcl') && APPLICATION_lcl == 'lcl') {
            $version = '1.1';
        }
        $this->session->set_userdata('system_version_number', $version);

        /*
         * ------------------------
         * 4. White-Label Config (Optional)
         * ------------------------
         */
        $file_wlb = str_rot13('serdhrag_punatvat/jyo.wfba');  // frequent_changing/wlb.json
        if (file_exists($file_wlb)) {
            $file_content_wlb = file_get_contents($file_wlb);
            $json_data_wlb = json_decode($file_content_wlb, true);
            $this->session->set_userdata('wlb', $json_data_wlb);
        }
    }
}
