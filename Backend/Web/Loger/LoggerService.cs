using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NLog;

namespace Web.Loger
{
    public class LoggerService : ILoggerService
    {
        private static LoggerService _instance = null;
        private Logger _logger = null;
        public void Error(string message)
        {
            _logger.Error(message);
        }

        public void Info(string message)
        {
            _logger.Info(message);
        }

        public static LoggerService Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new LoggerService();
                return _instance;
            }
        }

        private LoggerService()
        {
            _logger = LogManager.GetLogger("allfile"); ;
        }
    }
}
