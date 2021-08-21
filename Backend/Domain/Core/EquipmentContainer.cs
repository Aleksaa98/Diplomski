﻿using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Core
{
    public class EquipmentContainer : ConnectivityNodeContainer
    {
        private List<Disconnector> disconnector = new List<Disconnector>();
        private List<Fuse> fuses = new List<Fuse>();
        private List<LoadBreakSwitch> loadBreakSwitches = new List<LoadBreakSwitch>();
        private List<Breaker> breakers = new List<Breaker>();

        public List<Disconnector> Disconnector { get => disconnector; set => disconnector = value; }
        public List<Fuse> Fuses { get => fuses; set => fuses = value; }
        public List<LoadBreakSwitch> LoadBreakSwitches { get => loadBreakSwitches; set => loadBreakSwitches = value; }
        public List<Breaker> Breakers { get => breakers; set => breakers = value; }

        public EquipmentContainer(int id) : base(id) { }
        public EquipmentContainer() { }
    }
}