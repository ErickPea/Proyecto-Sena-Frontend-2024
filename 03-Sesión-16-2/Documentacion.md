# Documentación de Service Security

## Person

### ** POST => http://localhost:9000/service-security/v1/api/person **

#### **json normal**
```json
    {
        "id": 0,
        "state": true,
        "createdAt": "2024-02-16T20:40:55.434Z",
        "updatedAt": "2024-02-16T20:40:55.434Z",
        "deletedAt": "2024-02-16T20:40:55.434Z",
        "createdBy": 0,
        "updatedBy": 0,
        "deletedBy": 0,
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "phone": "string",
        "dateOfBirth": "2024-02-16",
        "gender": "string",
        "address": "string"
    }
```

#### **json a enviar**
```json
    {
        "state": true,
        "firstName": "Andres",
        "lastName": "Pantoja",
        "email": "andres@gmailcom",
        "phone": "3208963590",
        "dateOfBirth": "2025-02-15",
        "gender": "M",
        "address": "Calle 31"
    }
```

### ** PUT => http://localhost:9000/service-security/v1/api/person/1 **

#### **json normal**
```json
    {
        "id": 0,
        "state": true,
        "createdAt": "2024-02-16T20:40:55.434Z",
        "updatedAt": "2024-02-16T20:40:55.434Z",
        "deletedAt": "2024-02-16T20:40:55.434Z",
        "createdBy": 0,
        "updatedBy": 0,
        "deletedBy": 0,
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "phone": "string",
        "dateOfBirth": "2024-02-16",
        "gender": "string",
        "address": "string"
    }
```

#### **json a enviar**
```json
    {
        "state": true,
        "firstName": "Carlos Andres ",
        "lastName": "Pantoja Jaramillo",
        "email": "carlos@gmailcom",
        "phone": "3208963590",
        "dateOfBirth": "2025-02-15",
        "gender": "M",
        "address": "Calle 31"
    }
```

### ** Get (All) => http://localhost:9000/service-security/v1/api/person **

#### **json normal**
```json
    {
       
    }
```

#### **json a enviar**
```json
    {
      
    }
```

### ** Get (Id) => http://localhost:9000/service-security/v1/api/person/1 **

#### **json normal**
```json
    {
       
    }
```

#### **json a enviar**
```json
    {
      
    }
```

### ** Delete (Id) => http://localhost:9000/service-security/v1/api/person/1 **

#### **json normal**
```json
    {
       
    }
```

#### **json a enviar**
```json
    {
      
    }
```

# ********************************************


# Documentación de Service Security

## user

### * POST => http://localhost:9000/service-security/v1/api/user *

#### json normal
json
{
  "id": 0,
  "state": true,
  "createdAt": "2024-02-16T21:21:18.478Z",
  "updatedAt": "2024-02-16T21:21:18.478Z",
  "deletedAt": "2024-02-16T21:21:18.478Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "username": "string",
  "password": "string",
  "person": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-16T21:21:18.478Z",
    "updatedAt": "2024-02-16T21:21:18.478Z",
    "deletedAt": "2024-02-16T21:21:18.478Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "dateOfBirth": "2024-02-16",
    "gender": "string",
    "address": "string"
  }
}

#### json a enviar
json
   {
  "state": true,
  "username": "Andres",
  "password": "0918",
  "person": {
    "id": 1
     }
}

### * PUT => http://localhost:9000/service-security/v1/api/user/1 *

#### json normal
json
   {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-16T21:21:18.478Z",
  "updatedAt": "2024-02-16T21:21:18.478Z",
  "deletedAt": "2024-02-16T21:21:18.478Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "username": "string",
  "password": "string",
  "person": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-16T21:21:18.478Z",
    "updatedAt": "2024-02-16T21:21:18.478Z",
    "deletedAt": "2024-02-16T21:21:18.478Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "dateOfBirth": "2024-02-16",
    "gender": "string",
    "address": "string"
  }
}
#### json a enviar
json
    {
  "state": true,
  "username": "andrespantoja",
  "password": "0918",
  "person": {
    "id": 3
     }
}

### * Get (All) => http://localhost:9000/service-security/v1/api/user *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/user/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/user/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }

# ********************************************

# Documentación de Service Security

## role

### * POST => http://localhost:9000/service-security/v1/api/role *

#### json normal
json
{
  "id": 0,
  "state": true,
  "createdAt": "2024-02-16T22:07:51.643Z",
  "updatedAt": "2024-02-16T22:07:51.643Z",
  "deletedAt": "2024-02-16T22:07:51.643Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "name": "string",
  "description": "string"
}

#### json a enviar
json
   {
  "id": 1,
  "state": true,
  "name": "Cliente",
  "description": "Comprador"
}

### * PUT => http://localhost:9000/service-security/v1/api/role/1 *

#### json normal
json
  {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-16T22:07:51.643Z",
  "updatedAt": "2024-02-16T22:07:51.643Z",
  "deletedAt": "2024-02-16T22:07:51.643Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "name": "string",
  "description": "string"
}
#### json a enviar
json
   {
  "id": 2,
  "state": true,
  "name": "vendedor",
  "description": "Comprador"
}

### * Get (All) => http://localhost:9000/service-security/v1/api/userRole *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/role/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/role/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }




## user_Role

### * POST => http://localhost:9000/service-security/v1/api/user_Role *

#### json normal
json
{
  "id": 0,
  "state": true,
  "createdAt": "2024-02-16T22:21:20.820Z",
  "updatedAt": "2024-02-16T22:21:20.820Z",
  "deletedAt": "2024-02-16T22:21:20.820Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "user": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-16T22:21:20.820Z",
    "updatedAt": "2024-02-16T22:21:20.820Z",
    "deletedAt": "2024-02-16T22:21:20.820Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "username": "string",
    "password": "string",
    "person": {
      "id": 0,
      "state": true,
      "createdAt": "2024-02-16T22:21:20.820Z",
      "updatedAt": "2024-02-16T22:21:20.820Z",
      "deletedAt": "2024-02-16T22:21:20.820Z",
      "createdBy": 0,
      "updatedBy": 0,
      "deletedBy": 0,
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "phone": "string",
      "dateOfBirth": "2024-02-16",
      "gender": "string",
      "address": "string"
    }
  },
  "role": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-16T22:21:20.820Z",
    "updatedAt": "2024-02-16T22:21:20.820Z",
    "deletedAt": "2024-02-16T22:21:20.820Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string"
  }
}


#### json a enviar
json
   {
  "state": true,
  "user": {
    "id": 3
  },
  "role": {
    "id": 2

  }
}
   

### * PUT => http://localhost:9000/service-security/v1/api/user_Role/1 *

#### json normal
json
  {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-16T22:21:20.820Z",
  "updatedAt": "2024-02-16T22:21:20.820Z",
  "deletedAt": "2024-02-16T22:21:20.820Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "user": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-16T22:21:20.820Z",
    "updatedAt": "2024-02-16T22:21:20.820Z",
    "deletedAt": "2024-02-16T22:21:20.820Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "username": "string",
    "password": "string",
    "person": {
      "id": 0,
      "state": true,
      "createdAt": "2024-02-16T22:21:20.820Z",
      "updatedAt": "2024-02-16T22:21:20.820Z",
      "deletedAt": "2024-02-16T22:21:20.820Z",
      "createdBy": 0,
      "updatedBy": 0,
      "deletedBy": 0,
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "phone": "string",
      "dateOfBirth": "2024-02-16",
      "gender": "string",
      "address": "string"
    }
  },
  "role": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-16T22:21:20.820Z",
    "updatedAt": "2024-02-16T22:21:20.820Z",
    "deletedAt": "2024-02-16T22:21:20.820Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string"
  }
}

#### json a enviar
json
      {
  "state": true,
  "user": {
    "id": 3
  },
  "role": {
    "id": 2

  }
}


### * Get (All) => http://localhost:9000/service-security/v1/api/user_Role *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/user_Role/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/user_Role/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


# ********************************************

# Documentación de Service Security

## Module

### * POST => http://localhost:9000/service-security/v1/api/Module *

#### json normal
json
{
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T03:57:10.129Z",
  "updatedAt": "2024-02-17T03:57:10.129Z",
  "deletedAt": "2024-02-17T03:57:10.129Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "name": "string",
  "description": "string",
  "route": "string"
}


#### json a enviar
json
   {
  "id": 0,
  "state": true,
  "name": "string",
  "description": "string",
  "route": "string"
}
   

### * PUT => http://localhost:9000/service-security/v1/api/Module/1 *

#### json normal
json
  {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T03:57:10.129Z",
  "updatedAt": "2024-02-17T03:57:10.129Z",
  "deletedAt": "2024-02-17T03:57:10.129Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "name": "string",
  "description": "string",
  "route": "string"
}

#### json a enviar
json
      {
  "id": 0,
  "state": true,
  "name": "string",
  "description": "string",
  "route": "string"
}


### * Get (All) => http://localhost:9000/service-security/v1/api/Module *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/Module/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/Module/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }



# ********************************************

# Documentación de Service Security

## module_Role

### * POST => http://localhost:9000/service-security/v1/api/module_Role *

#### json normal
json
{
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T04:06:58.429Z",
  "updatedAt": "2024-02-17T04:06:58.429Z",
  "deletedAt": "2024-02-17T04:06:58.429Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "module": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-17T04:06:58.429Z",
    "updatedAt": "2024-02-17T04:06:58.429Z",
    "deletedAt": "2024-02-17T04:06:58.429Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string",
    "route": "string"
  },
  "role": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-17T04:06:58.429Z",
    "updatedAt": "2024-02-17T04:06:58.429Z",
    "deletedAt": "2024-02-17T04:06:58.430Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string"
  }
}


#### json a enviar
json
   {
  "id": 0,
  "state": true,

  "module": {
    "id": 0,


  },
  "role": {
    "id": 0,

  }
}
   

### * PUT => http://localhost:9000/service-security/v1/api/module_Role/1 *

#### json normal
json
  {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T04:06:58.429Z",
  "updatedAt": "2024-02-17T04:06:58.429Z",
  "deletedAt": "2024-02-17T04:06:58.429Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "module": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-17T04:06:58.429Z",
    "updatedAt": "2024-02-17T04:06:58.429Z",
    "deletedAt": "2024-02-17T04:06:58.429Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string",
    "route": "string"
  },
  "role": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-17T04:06:58.429Z",
    "updatedAt": "2024-02-17T04:06:58.429Z",
    "deletedAt": "2024-02-17T04:06:58.430Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string"
  }
}

#### json a enviar
json
      {
  "id": 0,
  "state": true,

  "module": {
    "id": 0,
 
  },
  "role": {
    "id": 0,

  }
}


### * Get (All) => http://localhost:9000/service-security/v1/api/module_Role *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/module_Role/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/module_Role/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


# ********************************************

# Documentación de Service Security

## view

### * POST => http://localhost:9000/service-security/v1/api/view *

#### json normal
json
{
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T04:08:00.423Z",
  "updatedAt": "2024-02-17T04:08:00.423Z",
  "deletedAt": "2024-02-17T04:08:00.423Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "name": "string",
  "getdescription": "string",
  "route": "string"
}


#### json a enviar
json
   {
  "id": 0,
  "state": true,

  "name": "string",
  "description": "string",
  "route": "string"
}
   

### * PUT => http://localhost:9000/service-security/v1/api/view/1 *

#### json normal
json
  {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T18:50:24.803Z",
  "updatedAt": "2024-02-17T18:50:24.803Z",
  "deletedAt": "2024-02-17T18:50:24.803Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "name": "string",
  "getdescription": "string",
  "route": "string"
}

#### json a enviar
json
   {
  "id": 0,
  "state": true,

  "name": "string",
  "description": "string",
  "route": "string"
}


### * Get (All) => http://localhost:9000/service-security/v1/api/view *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/view/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/view/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


# ********************************************


# Documentación de Service Security

## module_View

### * POST => http://localhost:9000/service-security/v1/api/module_View *

#### json normal
json
{
  "id": 0,
  "state": true,

  "module": {
    "id": 0,

  },
  "view": {
    "id": 0,
    "state": true,

  }
}


#### json a enviar
json
   {
  "id": 0,
  "state": true,

  "module": {
    "id": 0,
   
  },
  "view": {
    "id": 0,

  }
}
   

### * PUT => http://localhost:9000/service-security/v1/api/module_View/1 *

#### json normal
json
  {
  "id": 0,
  "state": true,
  "createdAt": "2024-02-17T04:09:37.847Z",
  "updatedAt": "2024-02-17T04:09:37.847Z",
  "deletedAt": "2024-02-17T04:09:37.847Z",
  "createdBy": 0,
  "updatedBy": 0,
  "deletedBy": 0,
  "module": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-17T04:09:37.847Z",
    "updatedAt": "2024-02-17T04:09:37.847Z",
    "deletedAt": "2024-02-17T04:09:37.847Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "description": "string",
    "route": "string"
  },
  "view": {
    "id": 0,
    "state": true,
    "createdAt": "2024-02-17T04:09:37.847Z",
    "updatedAt": "2024-02-17T04:09:37.847Z",
    "deletedAt": "2024-02-17T04:09:37.847Z",
    "createdBy": 0,
    "updatedBy": 0,
    "deletedBy": 0,
    "name": "string",
    "getdescription": "string",
    "route": "string"
  }
}

#### json a enviar
json
      {
  "id": 0,
  "state": true,

  "module": {
    "id": 0,

  },
  "view": {
    "id": 0,

  }
}


### * Get (All) => http://localhost:9000/service-security/v1/api/module_View *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Get (Id) => http://localhost:9000/service-security/v1/api/module_View/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }


### * Delete (Id) => http://localhost:9000/service-security/v1/api/module_View/1 *

#### json normal
json
    {
       
    }


#### json a enviar
json
    {
      
    }






