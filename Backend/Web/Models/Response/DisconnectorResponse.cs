using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Response
{
    public class DisconnectorResponse:SwitchEntity
    {
        public float ReactiveBreakingCurrent { get; set; }
    }
}
