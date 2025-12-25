<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/report.css">

<section class="main-content-wrapper">

    <section class="content-header">
        <h3 class="top-left-header text-left">Store Wise Daily Report</h3>
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
                <?php echo form_open(base_url() . 'Report/storewisedailysaleReport') ?>
                <div class="form-group">
                    <input tabindex="1" type="text" name="startDate" readonly class="form-control customDatepicker"
                        placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <div class="form-group">
                    <input tabindex="2" type="text" id="endMonth" name="endDate" readonly class="form-control customDatepicker"
                        placeholder="<?php echo lang('end_date'); ?>" value="<?php echo set_value('endDate'); ?>">
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
                <table id="datatable" class="table table-bordered">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Date</th>
                            <th>Outlet</th>
                            <?php if (!empty($storewisedailysale['methods'])): ?>
                                <?php foreach ($storewisedailysale['methods'] as $method): ?>
                                    <th><?= escape_output($method->name) ?></th>
                                <?php endforeach; ?>
                            <?php endif; ?>
                            <th>Total Sale</th>
                        </tr>
                    </thead>

                    <tbody>
                        <?php
                        $sn = 1;
                        $grandTotals = [];

                        if (!empty($storewisedailysale['result'])):
                            foreach ($storewisedailysale['result'] as $row):
                        ?>
                                <tr>
                                    <td><?= $sn++; ?></td>
                                    <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($row->sale_date))) ?></td>
                                    <td><?= escape_output(getOutletNameById($row->outlet_id)) ?></td>

                                    <?php foreach ($storewisedailysale['methods'] as $method):
                                        $mName = $method->name;
                                        $val = $row->$mName ?? 0;
                                        $grandTotals[$mName] = ($grandTotals[$mName] ?? 0) + $val;
                                    ?>
                                        <td><?= escape_output(getAmtFmt($val)) ?></td>
                                    <?php endforeach; ?>

                                    <td><?= escape_output(getAmtFmt($row->total_sale)) ?></td>
                                </tr>
                        <?php
                            endforeach;
                        endif;
                        ?>
                    </tbody>

                    <tfoot>
                        <?php if (!empty($storewisedailysale) && !empty($storewisedailysale['result'])): ?>
                            <tr>
                                <th colspan="3" class="text-right">Total:</th>
                                <?php if (!empty($storewisedailysale['methods'])): ?>
                                    <?php foreach ($storewisedailysale['methods'] as $method):
                                        $mName = $method->name;
                                    ?>
                                        <th><?= escape_output(getAmtFmt($grandTotals[$mName] ?? 0)) ?></th>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                                <th><?= escape_output(getAmtFmt(array_sum(array_column($storewisedailysale['result'], 'total_sale')))) ?></th>
                            </tr>
                        <?php endif; ?>
                    </tfoot>

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