<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/report.css">

<section class="main-content-wrapper">

    <section class="content-header">
        <h3 class="top-left-header text-left">Store Wise Monthly Report</h3>
        <input type="hidden" class="datatable_name" data-id_name="datatable" data-sumColumns='<?php echo json_encode([3]); ?>'>
    </section>

    <div class="my-2">
        <?php if (function_exists('isLMni') && isLMni() && isset($outlet_id)): ?>
            <h4 class="txt-color-grey"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id)) ?></h4>
        <?php endif; ?>
        <h4 class="txt-color-grey ir_txtCenter_mt0">
            <?php if (isset($user_id) && $user_id): ?>
                <?= lang('user') . ": " . userName($user_id); ?>
            <?php endif; ?>
        </h4>
        <h4 class="txt-color-grey">
            <?php
            $date_format = $this->session->userdata('date_format') ?: 'Y-m-d';
            ?>
            <?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($date_format, strtotime($start_date)) . " - " . date($date_format, strtotime($end_date)) : '' ?>
            <?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($date_format, strtotime($start_date)) : '' ?>
            <?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($date_format, strtotime($end_date)) : '' ?>
        </h4>
    </div>

    <div class="box-wrapper">
        <div class="row my-2">
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <?php echo form_open(base_url() . 'Report/storewisemonthlysalereport') ?>
                <div class="form-group">
                    <input tabindex="1" type="text" id="" name="startMonth" readonly class="form-control datepicker_months" placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <div class="form-group">
                    <input tabindex="2" type="text" id="endMonth" name="endMonth" readonly class="form-control datepicker_months" placeholder="<?php echo lang('end_date'); ?>" value="<?php echo set_value('endDate'); ?>">
                </div>
            </div>
            <?php if (isLMni()): ?>
            <?php endif; ?>
            <div class="col-sm-12 col-md-4 col-lg-2">
                <div class="form-group">
                    <button type="submit" name="submit" value="submit" class="btn w-100 bg-blue-btn">
                        <?php echo lang('submit'); ?>
                    </button>
                </div>
            </div>
        </div>

        <div class="table-box">
            <div class="table-responsive">
                <table id="datatable" class="table">
                    <thead>
                        <tr>
                            <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                            <th><?php echo lang('date'); ?></th>
                            <th>Outlet</th>
                            <th>Total Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $grandTotal = 0;
                        $total_payable = 0;
                        if (isset($StoreSaleReportByDate)):
                            foreach ($StoreSaleReportByDate as $key => $value) {
                                $grandTotal += $value->total_payable;
                                $key++;
                        ?>
                                <tr>
                                    <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                    <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))) ?></td>
                                    <td><?= escape_output(getOutletNameById($value->outlet_id)) ?></td>
                                    <td><?php echo escape_output(getAmtFmt($value->total_payable)) ?></td>
                                    <?php $total_payable += $value->total_payable; ?>
                                </tr>
                        <?php
                            }
                        endif;
                        ?>
                    </tbody>
                    <?php if (!empty($StoreSaleReportByDate)): ?>
                        <tr>
                            <th colspan="2"></th>
                            <th class="text-right"><?php echo lang('total') . ':'; ?></th>
                            <th><?php echo escape_output(getAmtFmt($grandTotal)); ?></th>
                        </tr>
                        <tfoot>
                            <tr>
                                <th colspan="2"></th>
                                <th class="text-right">Sum:</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    <?php endif; ?>
                </table>
            </div>
        </div>
    </div>

</section>

<!-- DataTables -->
<script src="<?php echo base_url(); ?>assets/datatable_custom/jquery-3.3.1.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url(); ?>assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.bootstrap4.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/buttons.html5.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/buttons.print.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jszip.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/pdfmake.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/vfs_fonts.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/newDesign/js/forTable.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/custom_report.js"></script>