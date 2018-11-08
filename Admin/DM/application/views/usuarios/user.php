<!-- Page content -->
<div class="container-fluid mt--7">
  <!-- Table -->
  <div class="row">
    <div class="col">
      <div class="card shadow">
        <div class="card-header border-0">
          <div class="row">
            <div class="col-md-8">
              <h3 class="mb-0">Usuarios</h3>
            </div>
            <div class="col-md-4 td-actions text-right text-white">
              <a class="btn btn-success" data-toggle="modal" data-target="#nuevo-usuario"><i class="fas fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">correo</th>
                <th scope="col">Fecha Ingreso</th>
                <th class="text-center" scope="col">Acciones</th>
              </tr>
            </thead>
            <?php foreach ($users as $key => $user) : ?>
            <tr>
              <td>
                <?php echo $user->id;?>
              </td>
              <td>
                <?php echo $user->usuario_id;?>
              </td>
              <td>
                <?php echo $user->nombre.' '.$user->apellido ;?>
              </td>
              <td>
                <?php echo $user->correo ;?>
              </td>
              <td>
                <?php echo $user->registro_fecha ;?>
              </td>
              <td class="td-actions text-center text-white">
                <a href="javascript:void(0)" id="<?php echo $user->id;?>" rel="tooltip" class="btn btn-warning view">
                  <i class="fas fa-edit"></i>
                </a>
                <a href="javascript:void(0)" id="<?php echo $user->id;?>" rel="tooltip" class="btn btn-danger delete">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>
            </tr>
            <?php endforeach; ?>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- MODALS -->

  <!-- Modal nuevo usuario -->
  <div class="modal fade" id="nuevo-usuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-plus"></i> Agregar nuevo usuario</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="<?=base_url()?>users/add" method="post" id="nuevo_usuario">
          <div class="modal-body">

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="nombre" class="bmd-label-floating">Correo</label>
                  <input type="email" class="form-control" id="correo" name="correo" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="nombre" class="bmd-label-floating">Nombre</label>
                  <input type="text" class="form-control" id="nombre" name="nombre" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="apellido" class="bmd-label-floating">Apellido</label>
                  <input type="text" class="form-control" id="apellido" name="apellido" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="usuario" class="bmd-label-floating">Usuario</label>
                  <input type="text" class="form-control" id="usuario" name="usuario" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="pass" class="bmd-label-floating">Contraseña</label>
                  <input type="password" class="form-control" id="pass" name="pass" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="pass2" class="bmd-label-floating">Repetir contraseña</label>
                  <input type="password" class="form-control" id="pass2" name="pass2" required>
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
  <!-- Modal nuevo usuario -->
  <div class="modal fade" id="editar-usuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-plus"></i> Modificar usuario</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="<?=base_url()?>users/update" method="post" id="actualizar_usuario">
          <div class="modal-body">

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="nombre" class="bmd-label-floating">Correo</label>
                  <input type="email" class="form-control" id="correo_edit" name="correo_edit" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="nombre" class="bmd-label-floating">Nombre</label>
                  <input type="text" class="form-control" id="nombre_edit" name="nombre_edit" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="apellido" class="bmd-label-floating">Apellido</label>
                  <input type="text" class="form-control" id="apellido_edit" name="apellido_edit" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="usuario" class="bmd-label-floating">Usuario</label>
                  <input type="text" class="form-control" id="usuario_edit" name="usuario_edit" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="pass" class="bmd-label-floating">Contraseña</label>
                  <input type="password" class="form-control" id="pass_edit" name="pass_edit" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="pass2" class="bmd-label-floating">Repetir contraseña</label>
                  <input type="password" class="form-control" id="pass2_edit" name="pass2_edit" required>
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
    $(document).on('click', '.delete', function () {
      var id_user = $(this).attr("id");
      $.ajax({
        url: "<?= base_url()?>users/delUser",
        type: "POST",
        data: { usuario: id_user },
        dataType: "html",
        success: function () {
          location.reload();
        },
      });
    });
    $(document).on('click', '.view', function () {
      var id_user = $(this).attr("id");
      $.ajax({
        url: "<?= base_url()?>users/getUser",
        type: "POST",
        dataType: "json",
        data: { usuario: id_user },
        success: function (datos) {
          $("#correo_edit").val(datos.correo);
          $("#nombre_edit").val(datos.nombre);
          $("#apellido_edit").val(datos.apellido);
          $("#usuario_edit").val(datos.usuario_id);
          $("#pass_edit").val(datos.clave);
          $("#pass2_edit").val(datos.clave);
          $("#editar-usuario").modal('show');
        }
      });
    });
  </script>