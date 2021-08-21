using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Exceptions
{
    public class BadRequestException : System.Exception
    {
        public int StatusCode { get; private set; }

        public BadRequestException(int id1, int id2) : base($"Id={id1} from URL and Id={id2} from the body data don't match")
        {

            StatusCode = (int)HttpResponseCode.BadRequest;
        }
    }
}
