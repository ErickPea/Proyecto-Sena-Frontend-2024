function save() {
    var data = {
        'username': $('#username').val(),
        'password': $('#password').val(),
       
    };
    console.log(data);
    var jsonData = JSON.stringify(data);
    $.ajax({
        url: 'http://localhost:9000/service-security/v1/api/user',
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
    'username': $('#username').val(),
    'password': $('#password').val(),
   
  };
  var id = $("#id").val();
  var jsonData = JSON.stringify(data);
  $.ajax({
    url: 'http://localhost:9000/service-security/v1/api/user/' +id,
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
        url: 'http://localhost:9000/service-security/v1/api/user',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            var data = response.data; 
            console.log(data);
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html += `<tr>
                              <td>${item.username}</td>
                              <td>${item.password}</td>
                             
                              <td><button onclick="findById(${item.id})">Editar</button></td>
                              <td><button onclick="deleteById(${item.id})">Eliminar</button></td>
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
      url: 'http://localhost:9000/service-security/v1/api/user/' + id,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        $('#id').val(data.data.id);
        $('#username').val(data.data.username);
        $('#password').val(data.data.password);
      
  
       
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
     url: 'http://localhost:9000/service-security/v1/api/user/'+id,
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
    $('#username').val('');
    $('#password').val('');
  }

