using Domain.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface ISubstationRepository:IGenericRepository<Substation>
    {
        bool GetByMridAndName(string mrid, string name);
    }
}
