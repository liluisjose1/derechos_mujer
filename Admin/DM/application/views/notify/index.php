<!-- Page content -->
<div class="container-fluid mt--7">
    <!-- Table -->
    <div class="row">
        <div class="col-md-12">
            <h1 class="display-2 text-white">Módulo Notificaciones de Denuncias</h1>
        </div>
        <div class="col">
            <div class="card shadow">
                <div class="card-header border-0">
                    <div class="row">
                        <div class="col-md-8">
                            <h3 class="mb-0">Casos</h3>
                        </div>
                    </div>
                </div>
                <?php if($notify){?>
                <div class="table-responsive">
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Fecha Ingreso</th>
                                <th class="text-center" scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($notify as $key => $noty) : ?>
                            <tr>
                                <td>
                                    <?php echo $noty->id;?>
                                </td>
                                <td>
                                    <?php echo $noty->id_usuario;?>
                                </td>
                                <td>
                                    <?php echo $noty->direccion ;?>
                                </td>
                                <td>
                                    <?php echo $noty->descripcion ;?>
                                </td>
                                <td>
                                    <?php
                                    if($noty->estado == '0'){echo "<spam class='btn btn-danger btn-sm' >No procesada </spam>";}
                                    elseif($noty->estado == '1'){echo "<spam class='btn btn-warning btn-sm' >En proceso </spam>";}
                                    else{echo "<spam class='btn btn-success btn-sm' >Finalizado </spam>";}?>
                                </td>
                                <td>
                                    <?php echo $noty->fecha_notificacion ;?>
                                </td>
                                <td class="td-actions text-center text-white">
                                    <a href="javascript:void(0)" id="<?php echo $noty->id;?>" rel="tooltip" class="btn btn-primary process">
                                        <i class="fas fa-archive"></i> Procesar denuncia
                                    </a>
                                    <a href="javascript:void(0)" id="<?php echo $noty->id;?>" rel="tooltip" class="btn btn-danger delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                            <?php endforeach; ?>

                        </tbody>
                    </table>
                </div>
                <?php }else{ echo "<h1 class='text-center'>No se encontraron registros</h1><br>";}?>
            </div>
        </div>
    </div>

    <!-- MODALS -->

    <!-- Modal nuevo usuario -->
    <div class="modal fade" id="procesar-denuncia" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-plus"></i> Procesar denuncia
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="<?=base_url()?>notify/editState" method="post" id="actualizar_usuario">
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="nombre" class="bmd-label-floating">ID de denuncia</label>
                                    <input type="text" class="form-control" id="denuncia_id" name="denuncia_id"
                                        required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="usuario" class="bmd-label-floating">Estado</label>
                                    <select class="form-control" name="estado" id="estado" required>
                                        <option value="">Seleccione una opción</option>
                                        <option value="0">No procesa</option>
                                        <option value="1">En proceso</option>
                                        <option value="2">Finalizada</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div id="errores"></div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <input type="submit" class="btn btn-primary" value="Guardar" name="guardar">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="<?= base_url(); ?>public/assets/js/validate_user.js"></script>
    <script>
        $(document).on('click', '.process', function () {
            var denuncia_id = $(this).attr("id");
            var estado = $('#estado').val();
            $("#denuncia_id").val(denuncia_id);
            $("#procesar-denuncia").modal('show');
        });
    </script>