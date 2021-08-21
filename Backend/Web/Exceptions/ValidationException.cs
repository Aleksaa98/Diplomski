using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Exceptions
{
    public class ValidationException: System.Exception
    {
        public int StatusCode { get; private set; }
        public ValidationException() : base("Not valid input!")
        {
            StatusCode = (int)HttpResponseCode.BadRequest;
        }
    }
}
