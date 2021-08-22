using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Response
{
    public class SubstationResponse:Entity
    {
        private List<Disconnector> disconnector = new List<Disconnector>();
        private List<Fuse> fuses = new List<Fuse>();
        private List<LoadBreakSwitch> loadBreakSwitches = new List<LoadBreakSwitch>();
        private List<Breaker> breakers = new List<Breaker>();

        public List<Disconnector> Disconnector { get => disconnector; set => disconnector = value; }
        public List<Fuse> Fuses { get => fuses; set => fuses = value; }
        public List<LoadBreakSwitch> LoadBreakSwitches { get => loadBreakSwitches; set => loadBreakSwitches = value; }
        public List<Breaker> Breakers { get => breakers; set => breakers = value; }
        public bool State { get; set; }
    }
}
