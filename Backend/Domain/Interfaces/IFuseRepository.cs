using Domain.Wires;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface IFuseRepository : IGenericRepository<Fuse>
    {
        bool GetByMridAndName(string mrid, string name);
    }
}
