using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        ISubstationRepository Substations { get; }
        IDisconnectorRepository Disconnector { get; }
        IFuseRepository Fuse { get; }
        IBreakerRepository Breaker { get; }
        ILoadBreakSwitchRepository LoadBreakSwitchRepository { get; }
        int Complete();
    }
}
