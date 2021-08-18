using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Wires
{
    public class Fuse : Switch
    {
        private float ratingCurrent;
        private bool cutout = false;
        private float maxFaultCurrent = 1000;

        public float RatingCurrent { get => ratingCurrent; set => ratingCurrent = value; }
        public bool Cutout { get => cutout; set => cutout = value; }
        public float MaxFaultCurrent { get => maxFaultCurrent; set => maxFaultCurrent = value; }

        public Fuse(int id) : base(id) { }
        public Fuse() { }
    }
}
