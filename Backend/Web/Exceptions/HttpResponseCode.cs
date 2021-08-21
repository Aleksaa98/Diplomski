using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Exceptions
{
    public enum HttpResponseCode
    {
        BadRequest = 400,
        NotFound = 404,
        AlreadyExists = 409
    }
}
