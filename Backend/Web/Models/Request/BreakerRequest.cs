using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Request
{
    public class BreakerRequest : SwitchEntity
    {
        public float InTransitTime { get; set; }
        public float RatedCurrent { get; set; }
    }
}
