using Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Domain.Core
{
    public class ConductingEquipment : Equipment
    {
        public PhaseCode Phases { get; set; }
        public float RatedVoltage { get; set; }

        public ConductingEquipment(int id) : base(id) { }
        public ConductingEquipment() { }
    }
}
