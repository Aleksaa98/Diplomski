using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Request
{
    public class FuseRequest : SwitchEntity
    {
        public float RatingCurrent { get; set; }
        public bool Cutout { get; set; }
        public float MaxFaultCurrent { get; set; }

    }
}
