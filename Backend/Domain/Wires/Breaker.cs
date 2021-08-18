using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Wires
{
    public class Breaker : ProtectedSwitch
    {
        public float InTransitTime { get; set; }
        public float RatedCurrent { get; set; }

        public Breaker(int id) : base(id) { }
        public Breaker() { }
    }
}
