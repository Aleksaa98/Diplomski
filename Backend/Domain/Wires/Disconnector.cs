using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Wires
{
    public class Disconnector : Switch
    {
        public float ReactiveBreakingCurrent { get; set; }

        public Disconnector(int id) : base(id) { }
        public Disconnector() { }
    }
}
