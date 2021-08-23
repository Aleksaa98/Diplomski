using Domain.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Wires
{
    public class Switch : ConductingEquipment
    {
        public int SubstationId { get; set; }
        public bool NormalOpen { get; set; }
        public bool Retained { get; set; }
        public int SwitchOnCount { get; set; }
        public virtual Substation Substation { get; set; }
        public Switch(int id) : base(id) { }
        public Switch() { }
    }
}
