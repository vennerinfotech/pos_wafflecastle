<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/report.css">
<script src="<?php echo base_url(); ?>frequent_changing/js/customer_report.js"></script>

<section class="main-content-wrapper">

    <section class="content-header">
        <h3 class="text-left top-left-header"><?php echo lang('customer_ledger'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('customer_ledger'); ?>" data-id_name="datatable" data-sumColumns= '<?php echo json_encode([3,4,5,6,7,8]); ?>'>


    </section>


    <div class="my-2">
        <?php
        if(isLMni() && isset($outlet_id)):
            ?>
            <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
            <?php
        endif;
        ?>
        <h4 class="ir_txtCenter_mt0">
            <?php
            if (isset($customer_id) && $customer_id):
                $customer = getCustomerData($customer_id);
                echo lang('customer').": <span class='op_txt_decoration_u'>".$customer->name. "(".$customer->phone.")</span><br>";
                echo lang('address').": <span class='op_txt_decoration_u'>".$customer->address."</span>";
            else:
                echo lang('customer').": ".lang('all');
            endif;
            ?>
        </h4>
        <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>
    </div>

    <div class="box-wrapper">
        <div class="row">
            <div class="mb-3 col-md-2 col-sm-12">
                <?php echo form_open(base_url() . 'Report/customerLedgerReport', $arrayName = array('id' => 'customerLedgerReport')) ?>
                <div class="form-group">
                    <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                           placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                </div>
            </div>
            <div class="mb-3 col-md-2 col-sm-12">

                <div class="form-group">
                    <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                           class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                           value="<?php echo set_value('endDate'); ?>">
                </div>
            </div>
            <div class="mb-3 col-md-2 col-sm-12">

                <div class="form-group">
                    <select tabindex="2" class="form-control select2 ir_w_100" id="customer_id" name="customer_id">
                        <option value=""><?php echo lang('customers'); ?></option>
                        <?php
                        $check_walk_in_customer = 1;
                        foreach ($customers as $value) {
                            if($value->id==1){
                                $check_walk_in_customer++;
                            }
                            ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('customer_id', $value->id); ?>>
                                <?php echo escape_output($value->name) ?></option>
                        <?php }
                        if($check_walk_in_customer==1){?>
                            <option  value="1">Walk-in Customer</option>
                            <?php
                        }
                        ?>
                    </select>
                </div>
                <?php if (form_error('customer_id')) { ?>
                    <div class="callout callout-danger my-2">
                        <span class="error_paragraph"><?php echo form_error('customer_id'); ?></span>
                    </div>
                <?php } ?>
                <div class="alert error-msg customer_id_err_msg_contnr ir_p_5">
                    <p id="customer_id_err_msg"></p>
                </div>
            </div>
            <?php
            if(isLMni()):
                ?>
                <div class="mb-3 col-md-2 col-sm-12">
                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="outlet_id" name="outlet_id">
                            <?php
                            $outlets = getAllOutlestByAssign();
                            foreach ($outlets as $value):
                                ?>
                                <option <?= set_select('outlet_id',$value->id)?>  value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                                <?php
                            endforeach;
                            ?>
                        </select>
                    </div>
                </div>
                <?php
            endif;
            ?>
            <div class="col-md-2 col-sm-12">
                <div class="form-group">
                    <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                </div>
            </div>
        </div>
        <div class="table-box">

            <div class="table-responsive">
                <table id="datatable" class="datatable table">
                    <thead>
                    <tr>
                        <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                        <th><?php echo lang('title'); ?></th>
                        <th><?php echo lang('date'); ?></th>
                        <th><?php echo lang('g_total'); ?></th>
                        <th><?php echo lang('paid'); ?></th>
                        <th><?php echo lang('due'); ?></th>
                        <th><?php echo lang('debit'); ?></th>
                        <th><?php echo lang('credit'); ?></th>
                        <th><?php echo lang('balance')."(".lang('current_due').")"; ?></th>
                    </tr>
                    </thead>
                    <tbody>

                    <?php
                    $grandTotal = 0;
                    $countTotal = 0;
                    $grant_total = $paid_total = $due_total = $debit_total = $credit_total = $balance_total = 0;
                    if (isset($customerLedger)):
                        foreach ($customerLedger as $key => $value) {
                            $key++;
                            ?>
                            <tr>
                                <td class="op_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output($value['title']); ?></td>
                                <td>
                                    <?php
                                    if($key==1){
                                        echo escape_output($value['date']);
                                    }else{
                                        echo date($this->session->userdata('date_format'), strtotime($value['date']));
                                    }
                                    ?>
                                </td>
                                <td><?php echo escape_output(getAmtFmt($value['grant_total'])); ?></td>
                                <?php $grant_total += escape_output(getAmtFmt($value['grant_total']));?>
                                <td><?php echo escape_output(getAmtFmt($value['paid'])); ?></td>
                                <?php $paid_total += escape_output(getAmtFmt($value['paid']));?>
                                <td><?php echo escape_output(getAmtFmt($value['due'])); ?></td>
                                <?php $due_total += escape_output(getAmtFmt($value['due']));?>
                                <td><?php echo escape_output(getAmtFmt($value['debit'])); ?></td>
                                <?php $debit_total += escape_output(getAmtFmt($value['debit']));?>
                                <td><?php echo escape_output(getAmtFmt($value['credit'])); ?></td>
                                <?php $credit_total += escape_output(getAmtFmt($value['credit']));?>
                                <td><?php echo escape_output(getAmtFmt($value['balance'])); ?></td>
                                <?php $balance_total += escape_output(getAmtFmt($value['balance']));?>
                            </tr>
                            <?php
                        }
                    endif;
                    ?>
                    </tbody>
                    <?php if (isset($customerLedger)): ?>
                        <tr>
                            <th colspan="2"></th>
                            <th>Total</th>
                            <th><?php echo number_format($grant_total,2);?></th>
                            <th><?php echo number_format($paid_total,2);?></th>
                            <th><?php echo number_format($due_total,2);?></th>
                            <th><?php echo number_format($debit_total,2);?></th>
                            <th><?php echo number_format($credit_total,2);?></th>
                            <th><?php echo number_format($balance_total,2);?></th>
                        </tr>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Sum</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
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
<script src="<?php echo base_url(); ?>assets/datatable_custom/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.flash.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/jszip.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.bootstrap4.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/pdfmake.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/vfs_fonts.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.html5.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.print.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/newDesign/js/forTable.js"></script>

<!-- <script src="<?php echo base_url(); ?>frequent_changing/js/custom_report1.js"></script> -->
<script src="<?php echo base_url(); ?>frequent_changing/js/custom_report.js"></script>
