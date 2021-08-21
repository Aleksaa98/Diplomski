using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Exceptions
{
    public class AlreadyExistsException : Exception
    {
        public int StatusCode { get; private set; }
        public AlreadyExistsException(string type, string mrid, string name) : base($"{type} with mrid='{mrid}' or name='{name}' already exists")
        {
            StatusCode = (int)HttpResponseCode.AlreadyExists;
        }
    }
}
