function save() {
    // Construir el objeto data
    var data = {
      'name': $('#name').val(),
      'description': $('#description').val(),
      'route': $('#route').val(),
     
    };
    console.log(data);
  
    var jsonData = JSON.stringify(data);
    $.ajax({
      url: 'http://localhost:9000/endurance/v1/api/module',
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
      'name': $('#name').val(),
      'description': $('#description').val(),
      'route': $('#route').val(),
      };
    var id = $("#id").val();
    var jsonData = JSON.stringify(data);
    $.ajax({
      url: 'http://localhost:9000/service-security/v1/api/module' +id,
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
        url: 'http://localhost:9000/service-security/v1/api/module',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            var data = response.data; // Acceder al atributo 'data' del objeto de respuesta
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html += `<tr>
  
                  <td>`+ item.name + `</td>
                  <td>`+ item.description + `</td>
                  <td>`+ item.route + `</td>
                  <td
                  
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
      url: 'http://localhost:9000/service-security/v1/api/module' + id,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        
        $('#name').val(data.name);
        $('#descriptión').val(data.description);
        $('#route').val(data.route);
      
  
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
    $('#name').val('');
    $('#decription').val('');
    $('#route').val('');
    
  }
  
  