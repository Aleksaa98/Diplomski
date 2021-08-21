using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface ILoadBreakSwitchRepository : IGenericRepository<LoadBreakSwitch>
    {
        bool GetByMridAndName(string mrid, string name);
    }
}
