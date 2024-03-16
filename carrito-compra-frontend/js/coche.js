function save() {
  // Construir el objeto data

  var data = {
    'marca': $('#marca').val(),
    'modelo': $('#modelo').val(),
    'numero': $('#numero').val(),
    'categoria': $('#categoria').val(),
    'state': parseInt($('#state').val()),
  };

  var jsonData = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/coche',
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

//ESTE MÉTODO ES PARA ACTUALIZAR

function update() {
  // Construir el objeto data
  var data = {
    'marca': $('#marca').val(),
    'modelo': $('#modelo').val(),
    'numero': $('#numero').val(),
    'categoria': $('#categoria').val(),
    'state': parseInt($('#state').val()),
  };
  var id = $("#id").val();
  var jsonData = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/coche/' +id,
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

//ESTE MÉTODO MUESTRA LOS DATOS EN LA TABLA
function loadData() {
  $.ajax({
      url: 'http://localhost:9000/endurance/v1/api/coche',
      method: 'GET',
      dataType: 'json',
      success: function (response) {
          var html = '';
          var data = response.data; // Acceder al atributo 'data' del objeto de respuesta
          if (Array.isArray(data)) {
              data.forEach(function (item) {
                  html += `<tr>
                <td>`+ item.marca + `</td>
                <td>`+ item.modelo + `</td>
                <td>`+ item.numero + `</td>
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




//ESTE MÉTODO ES PARA ELIMINAR

function deleteById(id) {
  $.ajax({
    url: 'http://localhost:9000/endurance/v1/api/coche/' + id,
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

//ESTE MÉTODO ES PARA LIMPIAR 

function clearData() {
  $('#id').val('');
  $('#marca').val('');
  $('#modelo').val('');
  $('#numero').val('');
  $('#categoria  ').val('');
  $('#state').val('');
}