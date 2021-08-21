using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Exceptions
{
    public class NotFoundException : System.Exception
    {
        public int StatusCode { get; private set; }

        public NotFoundException(string type, int id) : base($"{type} with Id={id} don't exists")
        {
            StatusCode = (int)HttpResponseCode.NotFound;
        }
    }
}
