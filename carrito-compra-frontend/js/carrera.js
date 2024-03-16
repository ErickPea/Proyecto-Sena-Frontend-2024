function save() {
  // Construir el objeto data
  var data = {
    'nombre': $('#nombre').val(),
    'fecha': $('#fecha').val(),
    'ubicacion': $('#ubicacion').val(),
    'longitud': $('#longitud').val(),
    'tipo': $('#tipo').val(),
    'categoria': $('#categoria').val(),
    // 'precio': parseFloat($('#precio').val()),
    // 'cantidad': parseInt($('#cantidad').val()),
    'state': parseInt($('#state').val()),
  };

  var jsonData = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/carrera',
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: jsonData,
    success: function (data) {
      alert("Registro agregado con éxito");
      loadData();
      clearData();
    },
    error: function (error) {
      console.error('Error en la solicitud:', error);
    }
  });
}

function update() {
  // Construir el objeto data
  var data = {
    'nombre': $('#nombre').val(),
    'fecha': $('#fecha').val(),
    'ubicacion': $('#ubicacion').val(),
    'longitud': $('#longitud').val(),
    'tipo': $('#tipo').val(),
    'categoria': $('#categoria').val(),
    // 'precio': parseFloat($('#precio').val()),
    // 'cantidad': parseInt($('#cantidad').val()),
    'state': parseInt($('#state').val()),
  };
  var id = $("#id").val();
  var jsonData = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/carrera/' +id,
    data: jsonData,
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }
  }).done(function (result) {
    alert("Registro actualizado con éxito");
    loadData();
    clearData();

    //actualzar boton
    var btnAgregar = $('button[name="btnAgregar"]');
    btnAgregar.text('Agregar');
    btnAgregar.attr('onclick', 'save()');
  })
}

function loadData() {
  $.ajax({
      url: 'http://localhost:9000/endurance/v1/api/carrera',
      method: 'GET',
      dataType: 'json',
      success: function (response) {
          var html = '';
          var data = response.data; // Acceder al atributo 'data' del objeto de respuesta
          if (Array.isArray(data)) {
              data.forEach(function (item) {
                  html += `<tr>

                <td>`+ item.nombre + `</td>
                <td>`+ item.fecha + `</td>
                <td>`+ item.ubicacion + `</td>
                <td>`+ item.longitud + `</td>
                <td>`+ item.tipo + `</td>
                <td>`+ item.categoria + `</td>
                <td>`+ (item.state == true ? 'Activio' : 'Inactivo') + `</td>
                <th><img src="../asset/icon/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
                <th><img src="../asset/icon/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
            </tr>`;
          });
        } else {
            console.error('El atributo "data" recibido no es un arreglo:', data);
        }
        $('#resultData').html(html);
    },
    error: function (error) {
        console.error('Error en la solicitud:', error);
     }
    });
}

function findById(id) {
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/carrera/' + id,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $('#id').val(data.id);
      $('#nombre').val(data.nombre);
      $('#fecha').val(data.fecha);
      $('#ubicacion').val(data.ubicacion);
      $('#longitud').val(data.longitud);
      $('#tipo').val(data.tipo);
      $('#categoria').val(data.categoria);
      $('#state').val(data.state == true ? 1 : 0);

      //Cambiar boton.
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text('Actualizar');
      btnAgregar.attr('onclick', 'update()');
    },
    error: function (error) {
      // Función que se ejecuta si hay un error en la solicitud
      console.error('Error en la solicitud:', error);
    }
  });
}

function deleteById(id) {
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/carrera/' + id,
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    }
  }).done(function (result) {
    alert("Registro eliminado con éxito");
    loadData();
    clearData();
  })
}

function clearData() {
  $('#id').val('');
  $('#nombre').val('');
  $('#fecha').val('');
  $('#ubicacion').val('');
  $('#longitud').val('');
  $('#tipo').val('');
  $('#categoria').val('');
  $('#state').val('');
}

