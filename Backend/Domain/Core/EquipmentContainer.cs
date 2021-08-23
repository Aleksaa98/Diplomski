using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Core
{
    public class EquipmentContainer : ConnectivityNodeContainer
    {
        public virtual ICollection<Disconnector> Disconnector { get; set; }

        public virtual ICollection<Fuse> Fuses { get; set; }

        public virtual ICollection<LoadBreakSwitch> LoadBreakSwitches { get; set; }

        public virtual ICollection<Breaker> Breakers { get; set; }
        public bool State{get;set;}


        public EquipmentContainer(int id) : base(id) { }
        public EquipmentContainer() { }
    }
}
