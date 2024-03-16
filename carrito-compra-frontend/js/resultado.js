
function save() {

  

      // Hacer la llamada AJAX para guardar el detalle de la factura
      $.ajax({
        url: 'http://localhost:9000/v1/api/detalle_factura',
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
    },
    error: function (error) {
      console.error('Error al obtener la factura:', error);
    }
  });
}



function update() {

  var data = {
    'nombre': $('#nombre').val(),
    'telefono': $('#telefono').val(),
    'direccion': $('#direccion').val(),
    'correo': $('#correo').val(),
    'state': parseInt($('#state').val()),
  };
  var id = $("#id").val();
  var jsonData = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:9000/v1/api/cliente/' +id,
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
    url: 'http://localhost:9000/v1/api/detalle_factura',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      var html = '';

      data.forEach(function (item) {

        html += `<tr>
                <td>`+ item.facturaId.codigo + `</td>
                <td>`+ item.productoId.nombre + `</td>
                <td>`+ item.cantidad + `</td>
                <td>`+ item.valorPagar + `</td>
                <td>`+ (item.state == true ? 'Activo' : 'Inactivo') + `</td>
                <th><img src="../asset/icon/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
                <th><img src="../asset/icon/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
            </tr>`;
      });

      $('#resultData').html(html);
    },
    error: function (error) {

      console.error('Error en la solicitud:', error);
    }
  });
}
//ESTE MÉTODO MUESTRA LOS DATOS DE CLIENTES
function selectProducto() {
  $.ajax({
    url: 'http://localhost:9000/v1/api/producto',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      var selectElement = $('#producto');
      selectElement.empty(); 

      data.forEach(function (item) {
  
        var option = $('<option>', {
          value: item.id,
          text: item.nombre
        });
        selectElement.append(option);
      });
    },
    error: function (error) {
      console.error('Error en la solicitud:', error);
    }
  });
}
function selectFactura() {
  $.ajax({
    url: 'http://localhost:9000/v1/api/factura',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      var selectElement = $('#factura');
      selectElement.empty(); 

      data.forEach(function (item) {
       
        var option = $('<option>', {
          value: item.id,
          text: item.codigo
        });
        selectElement.append(option);
      });
    },
    error: function (error) {
      console.error('Error en la solicitud:', error);
    }
  });
}




function findById(id) {
  $.ajax({
    url: 'http://localhost:9000/v1/api/cliente/' + id,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $('#id').val(data.id);
      $('#nombre').val(data.nombre);
      $('#correo').val(data.correo);
      $('#telefono').val(data.telefono);
      $('#direccion').val(data.direccion);
      $('#state').val(data.state == true ? 1 : 0);

      //Cambiar boton.
      var btnAgregar = $('button[name="btnAgregar"]');
      btnAgregar.text('Actualizar');
      btnAgregar.attr('onclick', 'update()');
    },
    error: function (error) {
    
      console.error('Error en la solicitud:', error);
    }
  });
}


function deleteById(id) {
  $.ajax({
    url: 'http://localhost:9000/v1/api/cliente/' + id,
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
  $('#correo').val('');
  $('#direccion').val('');
  $('#telefono  ').val('');
  $('#state').val('');
}

