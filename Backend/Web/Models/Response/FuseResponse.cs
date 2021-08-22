using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Response
{
    public class FuseResponse : SwitchEntity
    {
        public float RatingCurrent { get ; set; }
        public bool Cutout { get; set; }
        public float MaxFaultCurrent { get; set; }

    }
}
