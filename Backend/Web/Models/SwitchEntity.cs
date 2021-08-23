using Domain.Enumerations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Web.Models
{
    public class SwitchEntity
    {
        public int Id { get; set; }
        public string Mrid { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float CostPerUnit { get; set; }
        public int FailureRate { get; set; }
        public bool IsUnderground { get; set; }
        public PhaseCode Phases { get; set; }
        public float RatedVoltage { get; set; }
        public bool NormalOpen { get; set; }
        public bool Retained { get; set; }
        public int SwitchOnCount { get; set; }
        public int SubstationId { get; set; }
    }
}
