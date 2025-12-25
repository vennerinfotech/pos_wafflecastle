<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/report.css">
<link href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css" rel="stylesheet">


<section class="main-content-wrapper">
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('outletWiseCustomerReport'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('outletWiseCustomerReport'); ?>" data-id_name="datatable" data-sumColumns='<?php echo json_encode([0, 1, 2]); ?>'>

    </section>

    <div>
        <?php
        if (isLMni() && isset($outlet_id)):
        ?>
            <h4 class="txt-color-grey"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id)) ?></h4>
        <?php
        endif;
        ?>
        <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date') . ": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date') . ": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date') . ": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>
        <h4 class="txt-color-grey ir_txtCenter_mt0"><?php
                                                    if (isset($user_id) && $user_id):
                                                        echo lang('user') . ": " . userName($user_id);
                                                    else:
                                                        echo lang('user') . ": " . lang('all');
                                                    endif;
                                                    ?></h4>
        <!--   <h4 class="txt-color-grey ir_txtCenter_mt0"><?php
                                                            if (isset($waiter_id) && $waiter_id):
                                                                echo lang('waiter') . ": " . userName($waiter_id);
                                                            else:
                                                                echo lang('waiter') . ": " . lang('all');
                                                            endif;
                                                            ?></h4>  -->

    </div>


    <div class="box-wrapper">
        <div class="row">
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <?php echo form_open(base_url() . 'Report/outletWiseCustomerReport') ?>
                <div class="form-group">
                    <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                        placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">

                <div class="form-group">
                    <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                        class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                        value="<?php echo set_value('endDate'); ?>">
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <div class="form-group">
                    <select tabindex="2" class="form-control select2 ir_w_100" id="user_id" name="user_id">
                        <option value=""><?php echo lang('user'); ?></option>
                        <option value="<?= escape_output($this->session->userdata['user_id']); ?>">
                            <?= escape_output($this->session->userdata['full_name']); ?></option>
                        <?php
                        foreach ($users as $value) {
                        ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('user_id', $value->id); ?>>
                                <?php echo escape_output($value->full_name) ?></option>
                        <?php } ?>
                    </select>
                </div>
            </div>
            <!--  <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <div class="form-group">
                    <select tabindex="2" class="form-control select2 ir_w_100" id="waiter_id" name="waiter_id">
                        <option value=""><?php echo lang('waiter'); ?></option>
                        <?php
                        foreach ($users as $value) {
                            if ($value->designation == "Waiter"):
                        ?>
                                <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('waiter_id', $value->id); ?>>
                                    <?php echo escape_output($value->full_name) ?></option>
                                <?php
                            endif;
                        } ?>
                    </select>
                </div>
            </div>  -->
            <?php
            if (isLMni()):
            ?>
                <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="outlet_id" name="outlet_id">
                            <?php
                            $outlets = getAllOutlestByAssign();
                            foreach ($outlets as $value):
                            ?>
                                <option <?= set_select('outlet_id', $value->id) ?> value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                            <?php
                            endforeach;
                            ?>
                        </select>
                    </div>
                </div>
            <?php
            endif;
            ?>
            <div class="col-sm-12 mb-3 col-md-2 pull-right">
                <div class="form-group">
                    <button type="submit" name="submit" value="submit"
                        class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                </div>
            </div>
        </div>

        <div class="table-box">

            <div class="table-responsive">

                <table id="datatable" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center"><?php echo lang('sn'); ?></th>
                            <th><?php echo lang('customer'); ?> <?php echo lang('name'); ?></th>
                            <th><?php echo lang('phone'); ?></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        if (isset($detailedSaleReport1)):
                            foreach ($detailedSaleReport1 as $key => $value):
                                $key++;
                        ?>
                                <tr>
                                    <td class="text-center"><?php echo escape_output($key); ?></td>
                                    <td><?php echo escape_output($value->customer_name ?? '-'); ?></td>
                                    <td><?php echo escape_output($value->customer_phone ?? '-'); ?></td>
                                </tr>
                        <?php
                            endforeach;
                        endif;
                        ?>
                    </tbody>
                </table>



            </div>
            <!-- /.box-body -->
        </div>
    </div>

</section>


<!-- DataTables -->
<!-- jQuery -->
<script src="<?php echo base_url(); ?>assets/datatable_custom/jquery-3.3.1.js"></script>

<!-- DataTables -->
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.bootstrap4.min.js"></script>

<!-- DataTables extensions -->
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/buttons.html5.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/buttons.print.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jszip.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/pdfmake.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/vfs_fonts.js"></script>

<!-- Your custom scripts -->
<script src="<?php echo base_url(); ?>frequent_changing/newDesign/js/forTable.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/custom_report.js"></script>

<script>
$(document).ready(function() {
    var table = $('#datatable').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        order: [], // ✅ remove default descending order
        columnDefs: [
            { orderable: true, targets: [1, 2] }, // ✅ exclude SN from ordering
            { orderable: false, targets: [0] }    // SN column not sortable
        ],
        lengthMenu: [5, 10, 25, 50, 100],
        pageLength: 10,
        drawCallback: function(settings) {
            var api = this.api();
            api.column(0, { page: 'current' }).nodes().each(function(cell, i) {
                cell.innerHTML = i + 1; // ✅ always 1, 2, 3...
            });
        }
    });
});
</script>

