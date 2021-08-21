using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Loger
{
    public interface ILoggerService
    {
        void Error(string message);
        void Info(string message);
    }
}
