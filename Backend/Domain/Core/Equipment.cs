using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Core
{
    public class Equipment : PowerSystemResource
    {
        public float CostPerUnit { get; set; }
        public int FailureRate { get; set; }
        public bool IsUnderground { get; set; }
        public Equipment(int id) : base(id) { }
        public Equipment() { }
    }
}
