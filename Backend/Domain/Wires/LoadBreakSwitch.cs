using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Wires
{
    public class LoadBreakSwitch : ProtectedSwitch
    {
        public float RatedCurrent { get; set; }

        public LoadBreakSwitch(int id) : base(id) { }
        public LoadBreakSwitch() { }
    }
}
