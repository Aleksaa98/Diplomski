using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Response
{
    public class SubstationResponse : Entity
    {
        public List<Disconnector> Disconnector { get; set; }
        public List<Fuse> Fuses { get; set; }
        public List<LoadBreakSwitch> LoadBreakSwitches { get; set; }
        public List<Breaker> Breakers { get; set; }
        public bool State { get; set; }
    }
}
