<?php

if (!function_exists('custom_log')) {
    function custom_log($message) {
        $logFile = APPPATH . 'logs/custom-log-' . date('Y-m-d') . '.log';
        $logMessage = date('Y-m-d H:i:s') . ' - ' . $message . PHP_EOL;
        file_put_contents($logFile, $logMessage, FILE_APPEND);
    }
}

?>