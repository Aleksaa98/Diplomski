using Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Request
{
    public class LoadBreakSwitchRequest:SwitchEntity
    {
        public float RatedCurrent { get; set; }
    }
}
