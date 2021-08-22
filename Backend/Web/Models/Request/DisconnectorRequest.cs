using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Request
{
    public class DisconnectorRequest:SwitchEntity
    {
        public float ReactiveBreakingCurrent { get; set; }
    }
}
