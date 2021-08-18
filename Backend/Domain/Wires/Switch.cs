using Domain.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Wires
{
    public class Switch : ConductingEquipment
    {
        public bool NormalOpen { get; set; }
        public bool Retained { get; set; }
        public int SwitchOnCount { get; set; }
        public Switch(int id) : base(id) { }
        public Switch() { }
    }
}
