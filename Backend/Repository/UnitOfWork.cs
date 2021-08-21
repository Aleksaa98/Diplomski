using Context;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        public ISubstationRepository Substations { get; }

        public IDisconnectorRepository Disconnector { get; }

        public IFuseRepository Fuse { get; }

        public IBreakerRepository Breaker { get; }

        public ILoadBreakSwitchRepository LoadBreakSwitchRepository { get; }

        public UnitOfWork(AppDbContext context, ISubstationRepository substationRepository, IDisconnectorRepository disconnectorRepository, IFuseRepository fuseRepository, ILoadBreakSwitchRepository loadBreakSwitchRepository, IBreakerRepository breakerRepository) 
        {
            _context = context;
            Substations = substationRepository;
            Disconnector = disconnectorRepository;
            Fuse = fuseRepository;
            Breaker = breakerRepository;
            LoadBreakSwitchRepository = loadBreakSwitchRepository;
        }
        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
        }
    }
}
